<template>
  <section class="hero">
    <div class="hero-content">
      <h1>La Cosmetica</h1>
      <p>Discover your beauty with our premium products</p>
      <a href="/products">Shop Now</a>
    </div>
  </section>
</template>

<style>
.hero {
  height: 90vh;
  z-index: -1;
  /* background: linear-gradient(to right, #f8cdda, #fbc2eb); */
  background-image: url('https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
}

.hero h1 {
  font-size: 3rem;
}

.hero p {
  margin-bottom: 2rem;
}

.hero a {
  
  padding: 0.75rem 1.5rem;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
}

</style>