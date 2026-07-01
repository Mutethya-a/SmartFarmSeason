import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
        0: {
            id: 1,
            customerId: 2,
            productId: 3,
            quantity: 1,
            totalPaid: 1800,
            status: "Pending"
        },
        1: {
            id: 2,
            customerId: 3,
            productId: 4,
            quantity: 7,
            totalPaid: 1700,
            status: "Processing"
        },
        2: {
            id: 3,
            customerId: 4,
            productId: 5,
            quantity: 6,
            totalPaid: 300,
            status: "Fullfilled"
        },
        3: {
            id: 4,
            customerId: 5,
            productId: 6,
            quantity: 3,
            totalPaid: 1900,
            status: "Pending"
        },
        4: {
            id: 5,
            customerId: 1,
            productId: 2,
            quantity: 5,
            totalPaid: 1600,
            status: "Processing"
        },
        5: {
            id: 6,
            customerId: 6,
            productId: 7,
            quantity: 3,
            totalPaid: 1000,
            status: "Pending"
        }
        }

        return{
            orders
        }
   },
   actions:{
        checkout(payload) {
            //get the last key in the object
            const existingKeys = Object.keys(this.orders).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;
            
            // Loop through each item in the cart object
            Object.values(payload).forEach((cartItem) => {
                
                const calculatedTotalPaid = Number(cartItem.price) * Number(cartItem.quantity)

                const newOrder = {
                id: nextKey,
                customer_id: 4, //to do: get id from user data
                product_id: cartItem.id,       
                quantity: cartItem.quantity,
                total_paid: calculatedTotalPaid, 
                status: "processing"           
                }

                this.orders[nextKey] = {
                ...newOrder,
                id: nextKey
            };
            })
            
        },
       completeOrder(id) {
            // find the order in the object
            const order = Object.entries(this.orders).find(
                ([key, item]) => item.id === id //compare the ids
            );

            if (!order) {
                console.error(`No order found with id: ${id}`);
                return;
            }

            const [objectKey] = order;

            //replace the existing order data with what was received in payload
            this.orders[objectKey] = {
                ...this.orders[objectKey], 
                status: 'fulfilled'
            };
        },
   },
   persist: true,
})