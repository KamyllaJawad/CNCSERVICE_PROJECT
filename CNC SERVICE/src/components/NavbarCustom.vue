<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container" id="navbar">
      <!-- Logo centralizada à esquerda -->
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/CNC.png" alt="Logo" height="60">
      </router-link>

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
            <router-link class="nav-link" to="/about">Sobre Nós</router-link>
          </li>
          <!-- Serviços (Dropdown) -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Serviços
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/products">Produtos</router-link></li>
              <li><a class="dropdown-item" href="#">Assistência Técnica</a></li>
              <li><a class="dropdown-item" href="#">Automação Industrial</a></li>
              <li><a class="dropdown-item" href="#">Reforma e Retrofitting</a></li>
              <li><a class="dropdown-item" href="#">Manutenção Corretiva</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Representações</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contato</router-link>
          </li>
          <li class="list-inline-item p-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
              fill="currentColor" viewBox="0 0 16 16" class="bi bi-facebook">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951">
              </path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>

.navbar-brand {
  margin-right: auto;
}
.navbar {
  background-color: #f8f9fa;
}
</style>
