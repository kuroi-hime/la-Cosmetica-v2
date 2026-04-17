<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
// const product = ref(null);

// onMounted(async () => {
//   const slug = route.params.slug;

//   const res = await fetch(`http://localhost:8000/api/products/${slug}`);
//   product.value = await res.json();
// });

const product = {
  name: "Product Name",
  price: 49,
  description: "Simple product description.",
  stock: 10,
  images: [
    "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582103540024-f12c99ace136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585832622896-f6f54e54740c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
};

const quantity = ref(1);

</script>

<template>
  <div class="product-details">
    <!-- Gallery -->
    <div>
      <div>
        <img v-for="img in product.images" :src="img" alt="product.name">
      </div>
      <!-- Principal image -->
      <img :src="product.images[0]" alt="product.name">
    </div>
    <!-- Details -->
    <div>
      <h1>{{ product.name }}</h1>
      <p>Still {{ product.stock }}</p>
      <!-- quantity -->
      <div>
        <p>Quantity</p>
        <span>{{ quantity }}</span>
        <button>+</button>
        <button>-</button>
      </div>
      <p>{{ product.description }}</p>
      <div>
        <p>{{ product.price }} DH</p>
        <router-link class="buy-button">Buy</router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* .product-details {
  background: #c3c2c2;
  width: 100%;
  display: grid;
  padding: 1rem;
  grid-template-columns: 2fr 3fr;
} */

.product-details {
  width: 100%;
  height: 70vh;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
}

.product-details > div:first-child {
  display: flex;
  gap: 1rem;
}

.product-details img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.product-details > div:first-child > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-details > div:first-child > div img {
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 6px;
  object-fit: cover;
  border: 1px solid #aaa;
}

.product-details > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-details h1 {
  margin: 0;
}

.product-details > div:last-child > div {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  width: fit-content;
}

button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
  border-radius: 5px;
}

.product-details > div:last-child > div:last-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.buy-button {
  background: black;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
}

</style>