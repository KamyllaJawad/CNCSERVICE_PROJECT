// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    let { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'atendimento@cncservice.ind.br',
        subject: `Contato de ${name} através do site`,
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).send('Erro ao enviar email');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
