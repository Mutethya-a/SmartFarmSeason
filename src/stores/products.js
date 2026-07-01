import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/public/Produce (1).png'
            },
            1:{
                id: 2,
                name: "Onion",
                category: "Vegetable",
                price: 50,
                availability: true,
                image: '/public/Produce (2).png'
            },
            2:{
                id: 3,
                name: "Carrots",
                category: "Vegetable",
                price: 80,
                availability: true,
                image: '/public/Produce (3).png'
            },
            3:{
                id: 4,
                name: "Bell peppers",
                category: "Vegetable",
                price: 400,
                availability: true,
                image: '/public/Produce (4).png'
            },
            4:{
                id: 5,
                name: "Grapes",
                category: "Fruit",
                price: 400,
                availability: true,
                image: '/public/grapes.png'
            },
            5:{
                id: 6,
                name: "Apples",
                category: "Fruit",
                price: 400,
                availability: true,
                image: '/public/apples.png'
            },
            6:{
                id: 7,
                name: "Kales",
                category: "Vegetable",
                price: 400,
                availability: true,
                image: '/public/Kales.png'
            },
            7:{
                id: 8,
                name: "Cabbages",
                category: "Vegetable",
                price: 400,
                availability: true,
                image: '/public/cabbages.png'
            },
            8:{
                id: 9,
                name: "Oranges",
                category: "Fruit",
                price: 400,
                availability: true,
                image: '/public/oranges.png'
            },
            9:{
                id: 10,
                name: "Watermelon",
                category: "Fruits",
                price: 400,
                availability: true,
                image: '/public/watermelon.png'
            }
        }
       const selectedProduct = ref(null)
        return{
            products, selectedProduct
        }
   },
   actions:{
       updateSelectedProduct (payload){
        this.selectedProduct = payload
       }
   },
   persist: true,
})