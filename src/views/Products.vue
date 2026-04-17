<script setup>
import { ref, onMounted, computed } from "vue";
import { getProducts, getCategories } from "../services/api";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);
const categories = ref([]);
const selectedCategory = ref(null);

// fetch data
onMounted(async () => {
  const data_products = await getProducts();
  products.value = data_products.prouits;
  const data = await getCategories();
  categories.value = data.categories;
  
  console.log(products.value);
});

// filter
const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value;

  return products.value.filter(
    (p) => p.category_id === selectedCategory.value
  );
});
</script>

<template>
  <div class="container">

    <!-- Sidebar -->
    <aside class="sidebar">
      <h3>Categories</h3>

      <div 
        class="cat"
        :class="{ active: selectedCategory === null }"
        @click="selectedCategory = null"
      >
        All
      </div>

      <div
        v-for="cat in categories"
        :key="cat.id_categorie"
        class="cat"
        :class="{ active: selectedCategory === cat.id_categorie }"
        @click="selectedCategory = cat.id_categorie"
      >
        {{ cat.nom_categorie }}
      </div>

    </aside>

    <!-- Products -->
    <section class="products">
      <div
        v-for="p in products"
        :key="p.id"
      >
        <!-- Binding -->
        <div class="price-image-cat">
          <p class="price">{{ p.prix }} DH</p>
          <img :src="p.images[0] || '/defaultProductImage.jpg'" :alt="p.slug">
          <p class="category">{{ p.categorie }}</p>
        </div>
        <p class="nom-produit">{{ p.nom }}</p>

        <div class="actions">
          <router-link class="action" :to="`/products/${p.slug}`">
            Details
          </router-link>
          
          <router-link class="action" :to="`/products/${p.slug}`">
            Buy
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.25rem;
  padding: 2rem;
}

/* Sidebar */
.sidebar {
  background: #f5f5f5;
  padding: 1.25rem;
  border-radius: 10px;
  position: sticky;
  top: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}

.cat {
  padding: 0.75rem;
  cursor: pointer;
}

.cat.active {
  background: black;
  color: white;
}

/* Products */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.products > div {
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: #f8cdda;
  position: relative;
  overflow: hidden;
}

.price-image-cat {
  width: 100%;
  position: relative;
}

.price-image-cat > img {
  width: 100%;
}

.price {
  padding: 0.25rem;
  background-color: rgba(0,0,0, 0.5);
  width: fit-content;
  color: white;
  border-radius: 8px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}

.category {
  padding: 0.25rem;
  background-color: rgba(248, 205, 218, 1);
  width: fit-content;
  border-top-right-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 2px solid black;
}

.nom-produit {
  padding: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.actions {
  display: flex;
  padding: 0 1rem;
  padding-bottom: 1rem;
  justify-content: end;
  gap: 0.5rem;
}

.action {
  padding: 0.5rem;
  background: #000;
  color: white;
  border-radius: 0.5rem;
  width: 40%;
  text-align: center;
}

</style>