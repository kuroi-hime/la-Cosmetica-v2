<script setup>
  defineProps(["categories"]);
  // console.log(categories)
  
</script>

<template>
  <section class="categories">
    <h2>Categories</h2>
    <div class="grid">
      <div v-for="cat in categories" :key="cat.id_categorie" class="card">
        {{ cat.nom_categorie }}
      </div>
    </div>
  </section>
</template>

<style>

.categories {
  padding: 2.5rem;
  text-align: center;
  max-width: 100vw;
}

.categories h2 {
  margin-bottom: 1rem;
}

.grid {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.card {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
}
</style>