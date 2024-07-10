<template>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <a :href="link" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      text: String,
      image: String,
      link: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin: 1rem;
  }
  </style>
  