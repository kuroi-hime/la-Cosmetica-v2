<!-- <template> -->
  <!-- <div> -->

    <!-- Hero Section -->
    <!-- <section class="hero">
      <h1>Welcome to <span>La Cosmetica</span></h1>
      <p>Discover the best beauty products for your daily routine</p>
      <router-link to="/products">Shop Now</router-link>
    </section> -->

    <!-- Categories -->
    <!-- <section class="categories">
      <h2>Categories</h2>
      <div class="category-list">
        <div class="card">Skincare</div>
        <div class="card">Makeup</div>
        <div class="card">Haircare</div>
        <div class="card">Fragrance</div>
      </div>
    </section> -->

    <!-- Top Products -->
    <!-- <section class="products">
      <h2>Top Products</h2>
      <div class="product-list">

        <div class="product-card">
          <img src="https://via.placeholder.com/300x200" />
          <h3>Face Cream</h3>
          <p>$25</p>
        </div>

        <div class="product-card">
          <img src="https://via.placeholder.com/300x200" />
          <h3>Lipstick</h3>
          <p>$15</p>
        </div>

        <div class="product-card">
          <img src="https://via.placeholder.com/300x200" />
          <h3>Perfume</h3>
          <p>$40</p>
        </div>

      </div>
    </section> -->

  <!-- </div> -->
<!-- </template> -->

<!-- <style> -->
/* Hero */
<!-- .hero {
    height: 100vh;
    /* min-height: 100vh; */
    width: 100vw;
    text-align: center;
    padding: 60px 20px;
    background: #ffe4ec;
    z-index: -1;
    position: absolute;
    top: 0;
} -->

/* .hero h1 {
  font-size: 40px;
  color: #333;
}

.hero span {
  color: #e91e63;
}

.hero p {
  margin: 10px 0;
  color: #666;
}

.hero button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #e91e63;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.hero button:hover {
  background: #d81b60;
} */

/* Categories */
<!-- .categories {
  padding: 40px 20px;
}

.categories h2 {
  margin-bottom: 20px;
}

.category-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 150px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 8px;
} -->

/* Products */
<!-- .products {
  padding: 40px 20px;
}

.product-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.product-card {
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.product-card img {
  width: 100%;
  border-radius: 5px;
}

.product-card h3 {
  margin: 10px 0 5px;
}

.product-card p {
  color: #e91e63;
  font-weight: bold;
}
</style> -->


<!-- <template>
  <div>
    <div>
      <v-card to="detail">
        <v-img
            :aspect-ratio="16 / 9"
            dark
            gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
            height="500px"
            src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="accent" to="category">Travel</v-btn>
              </v-col>
              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">
                  Great Travel Blogs From Around The World To Inspire You
                </h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-icon large>mdi-feather</v-icon>
                </v-avatar>

                <div class="text-h6 pl-2">Yan Lee · 22 July 2019</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Recommended For You</h2>

            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" lg="4" md="6">
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="50"
                    open-delay="50"
                >
                  <div>
                    <v-card
                        :color="hover ? 'white' : 'transparent'"
                        :elevation="hover ? 12 : 0"
                        flat
                        hover
                        to="/detail"
                    >
                      <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg"
                          style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent" to="category">TIPS</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          How to write an awesome blog post in 5 steps
                        </div>

                        <div class="text-body-1 py-4">
                          Ultrices sagittis orci a scelerisque. Massa placerat
                          duis ultricies lacus sed turpis
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Yan Lee · 22 July 2019</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Featured</h2>

            <v-row>
              <v-col v-for="i in 3" :key="i" cols="6" lg="4">
                <v-card dark flat>
                  <v-img
                      :aspect-ratio="16 / 9"
                      class="elevation-2 fill-height"
                      gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      height="600px"
                      src="https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg"
                  >
                    <div
                        class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="accent">ANIMALS</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                            class="text-h5 py-3 font-weight-bold"
                            style="line-height: 1.2"
                        >
                          15 things I have always wondered about birds
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Latest Posts</h2>

            <div>
              <v-row v-for="i in 6" :key="i" class="py-4">
                <v-col cols="12" md="4">
                  <v-card flat height="100%">
                    <v-img
                        :aspect-ratio="16 / 9"
                        height="100%"
                        src="https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg"
                    ></v-img>
                  </v-card>
                </v-col>

                <v-col>
                  <div>
                    <v-btn color="accent" depressed>TRAVEL</v-btn>

                    <h3 class="text-h4 font-weight-bold pt-3">
                      Ut enim blandit volutpat maecenas volutpat blandit
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-icon dark>mdi-feather</v-icon>
                      </v-avatar>

                      <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar/>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script> -->




<script setup>
import { ref, onMounted } from "vue";
import Hero from "../components/Hero.vue";
import Categories from "../components/Categories.vue";
import ProductCard from "../components/ProductCard.vue";
import { getTopProducts, getCategories } from "../services/api";

const products = ref([]);
const categories = ref([]);

onMounted(async () => {
  const data_products = await getTopProducts();
  products.value = data_products['produits populaires'];
  const data = await getCategories();
  categories.value = data.categories;
});
</script>

<template>
  <div class="home">
    <Hero />

    <Categories :categories="categories" />

    <section class="top-products">
      <h2>Top Products</h2>
      <div class="products-grid">
        <ProductCard
          v-for="p in products"
          :key="p.id_produit"
          :product="p"
        />
      </div>
    </section>
  </div>
</template>

<style>
.home {
  width: 100vw;
}

.top-products {
  padding: 2rem;
  text-align: center;
}

.top-products h2 {
  margin-bottom: 1rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
</style>