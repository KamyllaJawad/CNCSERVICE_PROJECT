<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container" id="navbar">
      <!-- Logo centralizada à esquerda -->
      <!-- <router-link class="navbar-brand" to="/">
        <img src="@/assets/CNC.png" alt="Logo" height="60">
      </router-link> -->
      <a href="#carousel" class="navbra-brand">
        <img src="@/assets/CNC.png" alt="Logo" height="60">
      </a>

      <!-- Botão de menu responsivo -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Itens da navbar centralizados à direita -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Tabs -->
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/about">Sobre Nós</router-link> -->
            <a class="nav-link" href="#about" :class="{ active: activeSection === 'about' }">Sobre Nós</a>
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/contact">Representações</router-link> -->
            <a href="#customers" class="nav-link" :class="{ active:activeSection === 'customers' }">Represetações</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link" :class="{ active:activeSection === 'services' }">Produtos</a>
            <!-- Serviços (Dropdown) -->
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Serviços
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/products">Produtos</router-link></li>
              <li><a class="dropdown-item" href="#services">Assistência Técnica</a></li>
              <li><a class="dropdown-item" href="#">Automação Industrial</a></li>
              <li><a class="dropdown-item" href="#">Reforma e Retrofitting</a></li>
              <li><a class="dropdown-item" href="#">Manutenção Corretiva</a></li>
            </ul>
          </li> -->
          
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/contact">Contato</router-link> -->
             <a href="#contact" class="nav-link">Contato</a>
          </li>
          <li class="list-inline-item p-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
              fill="currentColor" viewBox="0 0 16 16" class="bi bi-facebook">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951">
              </path>
            </svg>
          </li>
        </ul>
        <div class="underline mb-4" :style="underlineStyle"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: "NavbarCustom",
  setup() {
    const activeSection = ref('');
    const underlineStyle = ref({});

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      console.log(sections);
      let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 56 && scrollPos < section.offsetTop + section.offsetHeight) {
            activeSection.value = section.id;
          const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) {
              const linkRect = activeLink.getBoundingClientRect();
              underlineStyle.value = {
                width: `${linkRect.width}px`,
                left: `${linkRect.left}px`
              };
            }
          
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // To set the initial state
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      activeSection,
      underlineStyle
    };
  }
};
</script>
<style scoped>

.navbar-brand {
  margin-right: auto;
}
.navbar {
  background-color: #f8f9fa;
}
.underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #0e68b1;
  transition: left 0.2s ease, width 0.2s ease;
}
</style>
