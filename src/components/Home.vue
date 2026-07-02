<script setup>
import { useProductsStore } from '../stores/products'
import { useRouter } from 'vue-router'

const router = useRouter()
const productsStore = useProductsStore()
const products = productsStore.products

function view(product){
   productsStore.updateSelectedProduct(product) // keep track of the selected item
    router.push('/product_details')
}
const produce = [
  { name: 'Tomatoes', price: 'Ksh 100 per kg', img: '/public/Produce (1).png' },
  { name: 'Onions', price: 'Ksh 200 per kg', img: '/public/Produce (2).png' },
  { name: 'Carrots', price: 'Ksh 150 per kg', img: '/public/Produce (3).png' },
  { name: 'Bell Peppers', price: 'Ksh 150 per kg', img: '/public/Produce (4).png' },
]
</script>

<template>
  <v-container fluid class="pa-0">
    <!-- Hero Carousel -->
    <v-carousel cycle height="480" hide-delimiter-background show-arrows="hover">
      <v-carousel-item
        v-for="n in 4"
        :key="n"
        :src="`/public/Farm (${n}).png`"
        cover
      >
        <div class="d-flex fill-height align-center justify-center bg-black-gradient">
          <div class="text-center text-white px-4">
            <div class="text-h3 font-weight-bold mb-2">Fresh From the Farm</div>
            <div class="text-h6 font-weight-light">Straight to your doorstep, every time</div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <!-- About Us -->
    <v-container class="bg-secondary py-16" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <div class="text-h3 font-weight-bold mb-6 text-white">Welcome to Smart Farm Season!</div>
          <div class="text-body-1 text-white mb-6" style="line-height: 1.8;">
            Smart Farm Season is your one-stop shop for fresh, farm-grown produce delivered
            right to your door. We work directly with local farmers to bring you the
            best fruits and vegetables Kenya has to offer, at fair prices and at the
            peak of freshness.
          </div>
          <div class="text-body-1 text-white" style="line-height: 1.8;">
            Getting your hands on quality produce should never be a hassle. With easy
            online ordering, secure checkout, and fast delivery across Kenya, farm-fresh
            groceries are always just a few clicks away. Whether you're stocking up for
            the week or cooking something special, Smart Farm Season makes it simple.
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Offers -->
    <v-container class="py-16">
      <v-row justify="center" class="mb-8">
        <v-col cols="12" class="text-center">
          <div class="text-h4 font-weight-bold">Today's Best Offers</div>
          <div class="text-body-1 text-medium-emphasis">Fresh picks at unbeatable prices</div>
        </v-col>
      </v-row>

      <v-row justify="center" align="stretch" class="mb-8">
        <v-col v-for="product in Object.values(products).slice(0, 3)" :key="product.name" cols="12" sm="10" md="4">
          <v-card class="h-100 d-flex flex-column" elevation="3" rounded="lg">
            <v-img :src="product.image" height="180" cover></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }}</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-actions class="pa-4 pt-0">
              <v-btn to="/product_details" color="primary" block variant="flat" @click="view(product)">
                View
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Footer -->
    <v-container class="bg-primary py-10" fluid>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <router-link to="/">
            <v-img src="/public/farmlogo.png" width="120" class="mx-auto mx-md-0"></v-img>
          </router-link>
          <p class="text-white mt-3 mb-0">Copyright &copy; 2026 Smart Farm Season</p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <p class="text-white font-weight-medium mb-2">Follow us on:</p>
          <v-btn icon="mdi-instagram" variant="text" color="white" href="#"></v-btn>
          <v-btn icon="mdi-twitter" variant="text" color="white" href="#"></v-btn>
          <v-btn icon="mdi-facebook" variant="text" color="white" href="#"></v-btn>
        </v-col>

        <v-col cols="12" md="4" class="text-center text-md-right">
          <p class="text-white font-weight-medium mb-1">Contact Us</p>
          <p class="text-white mb-0">Email: info@shambaonline.com</p>
          <p class="text-white mb-0">Phone: 0712 345 789</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.bg-black-gradient {
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 100%);
}
</style>