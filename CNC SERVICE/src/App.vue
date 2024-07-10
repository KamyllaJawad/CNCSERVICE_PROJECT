<template>
  <div id="app">
    <NavbarCustom/>
    <router-view/>
    <FooterCustom/>
  </div>
</template>

<script>
import NavbarCustom from './components/NavbarCustom.vue';
import FooterCustom from './components/FooterCustom.vue';

export default {
  name: 'App',
  components: {
    NavbarCustom,
    FooterCustom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#home {
  background-color: #f8f9fa;
}

#about {
  background-color: #e9ecef;
}

#contact {
  background-color: #dee2e6;
}
</style>
