<!-- <script setup>
  import Header from './components/layouts/Header.vue'
  import Footer from './components/layouts/Footer.vue'
</script>

<template>

  <div id="app_conatiner">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>

</template>

<style scoped>
  #app_conatiner{
    margin: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  }

  main{
    max-height: 100vh;
  }

@media (min-width: 1024px) {

}
</style> -->

<template>
  <div class="app">

    <nav class="navbar">
      <h2>La Cosmetica</h2>
      <div class="links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
      </div>
      <div>
        <a href="/register">Register</a>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2026 La Cosmetica - All rights reserved</p>
    </footer>

  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 0.5rem 2rem;
  background: black;
  color: white;
  align-items: baseline;
}
.navbar a {
  color: white;
  /* margin-left: 15px; */
  text-decoration: none;
}

.links {
  display: flex;
  gap: 1rem;
}

.links a {
  border-bottom: 2px solid currentColor;
}

.links a:hover {
  color: #f8cdda;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
}

/* optional */
.footer {
  text-align: center;
  padding: 1.25rem;
  background: #f5f5f5;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
  margin-top: 40px;
}
</style>