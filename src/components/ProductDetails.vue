<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const productsStore = useProductsStore()
const product = productsStore.selectedProduct

//cart
const cartStore = useCartStore()
const quantity = ref(1)
function buy(product){
    product.quantity = quantity.value
    cartStore.updateCart(product)
     router.push('/cart')
}
</script>

<template>
    <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" :src="product.image"  ></v-img>
            </v-card>
            </v-col>
            <v-col md="6">
                <v-card height="620" color="primary">
                    <v-card-item>
                        <v-card-title class="mb-4">{{ product.name }}</v-card-title>
                        <v-chip class="mb-4">{{ product.category }}</v-chip>
                            <v-row>
                                <v-col md="4">
                            
                                </v-col>
                                <v-col md="6">
                                    <v-btn color="lime-lighten-2" variant="outlined" density="compact" readonly > In Stock</v-btn>
                                </v-col>
                            </v-row>
                        <v-card-subtitle>Ksh {{ product.price }}</v-card-subtitle>
                        <v-card-text> 
                            <v-row>              
                                <v-col md="4">Quantity</v-col>
                                <v-col md="6">
                                    <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>Confessions about the suffering of Nairobi men in Kenya
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card-item>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-card-text>Total: 0</v-card-text>
                        <v-btn elevation="4" variant="elevated " @click="buy(book)"> Add to Cart </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
</template>