<script setup>
import {ref, computed} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useOrdersStore } from '../stores/orders'
import { useRouter } from 'vue-router'

const router = useRouter()
const productsStore = useProductsStore()
const ordersStore = useOrdersStore()
const products = productsStore.products
const isAuthenticated = localStorage.getItem('isAuthenticated')

function view(product){
   productsStore.updateSelectedProduct(product) // keep track of the selected item
    router.push('/product_details')
}

//cart
const cartStore = useCartStore()
const cart = cartStore.cart
const dialog = ref(false)

const quantity = ref(1)

function addToCart(product){
    if (isAuthenticated) {
        product.quantity = quantity.value
        cartStore.updateCart(product)
    }
    else{
        router.push('/login')
    }
}
function checkout(){
    if (isAuthenticated) {
        ordersStore.checkout(cart)
        console.log('here')
    }
    else{
        router.push('/login')
    }
}
const cartTotal = computed(() => {
  return cart.reduce((sum, item) => {
    const qty = Number(item.quantity || 0)
    const price = Number(item.price || 0)
    return sum + (price * qty)
  }, 0)
})
const handleRemove = (productId) => {
  cartStore.removeCart(productId)
}
</script>

<template>
    <v-container max-width="100%">
        <v-row class="mb-8 mt-8" align="center">
            <v-col>
                <div class="text-h4 font-weight-bold">
                    Browse products
                </div>
            </v-col>
            <v-col class="text-right">
                <v-btn color="primary" variant="elevated" position="fixed" style="z-index: 9999; top: 100px; right: 50px;" @click="dialog = true">
                    <v-icon start icon="mdi-cart"></v-icon>
                    Checkout
                </v-btn>
            </v-col>
        </v-row>
        <v-divider class="mb-8"/>

        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
                <v-card class="h-100 d-flex flex-column" elevation="3" rounded="lg">
                    <v-img :src="product.image" height="200" cover></v-img>
                    <v-card-title class="text-truncate">{{ product.name }}</v-card-title>
                    <v-card-subtitle>Ksh {{ product.price }}</v-card-subtitle>
                    <v-card-text style="flex-grow: 1;">{{ product.description }}</v-card-text>
                    <v-card-actions class="pa-4 pt-0">
                        <v-btn color="primary" variant="elevated" size="small" @click="addToCart(product)">Add to Cart</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" variant="outlined" size="small" @click="view(product)">View</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Checkout -->
     <v-dialog v-model="dialog" max-width="600">
        <v-card v-if="cart.length == 0">
            <v-row class="ma-4" align="center">
                <v-col cols="10">
                    <div class="text-h6">
                        Your cart is empty!
                    </div>
                </v-col>
                <v-col cols="2" class="text-right">
                    <v-btn color="primary" icon="mdi-close" variant="text" @click="dialog = false"></v-btn>
                </v-col>
            </v-row>
        </v-card>

        <v-card v-else>
            <v-row class="ma-4" align="center">
                <v-col cols="10">
                    <v-card-title class="pa-0">Cart</v-card-title>
                </v-col>
                <v-col cols="2" class="text-right">
                    <v-btn color="primary" icon="mdi-close" variant="text" @click="dialog = false"></v-btn>
                </v-col>
            </v-row>
            <v-divider/>
            <v-expansion-panels :rounded="[20, 8]" gap="8" variant="accordion" class="ma-4" >
                <v-expansion-panel v-for="(item, index) in cart" :key="item.id" color="secondary">
                    <v-expansion-panel-title expand-icon="mdi-menu-down">{{ item.name }}</v-expansion-panel-title>
                    <v-expansion-panel-text> Price: Ksh {{ item.price }} </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        <v-row align="center">
                            <v-col cols="3">
                                <v-select v-model="cart[index].quantity" :items="[1,2,3,4,5]" label="Qty" density="compact" variant="outlined" hide-details ></v-select>
                            </v-col>
                            <v-col cols="7">
                                Subtotal: Ksh {{ (item.price * (item.quantity || 0)).toFixed(2) }}
                            </v-col>
                            <v-col cols="2" class="text-center">
                                <v-btn icon="mdi-trash-can-outline" variant="text" color="error" density="comfortable" @click="handleRemove(item.id)" ></v-btn>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-card-actions class="pa-4">
                <div>
                    <span class="mr-2">Total Amount:</span>
                    <span class="text-h5 font-weight-bold text-primary">Ksh {{ cartTotal.toFixed(2) }}</span>
                </div>
                <v-spacer/>
                <v-btn color="primary" variant="elevated" @click="checkout">Pay via MPesa</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>