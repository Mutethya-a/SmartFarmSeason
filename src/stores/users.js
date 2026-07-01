import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id: 1,
                firstName: "Joy",
                lastName: "Njeri",
                email: "joynjeri@example.com",
                phone: "0712345678",
                location: "Nakuru",
                adress: "123, Koinange Street"
            },
            1:{
                id: 2,
                firstName: "Mary",
                lastName: "Ladoe",
                email: "maryladoe@example.com",
                phone: "0711223344",
                location: "Nairobi",
                adress: "133, Tom Mboya Street"
            },
            2:{
                id: 3,
                firstName: "Dan",
                lastName: "Mambo",
                email: "danmambo@example.com",
                phone: "071345689",
                location: "Mombasa",
                adress: "Nyali"
            },
            3:{
                id: 4,
                firstName: "Kiriinya",
                lastName: "Elvis",
                email: "kiriinyaelvis@example.com",
                phone: "0700998877",
                location: "Meru",
                adress: "t room"
            },
            4:{
                id: 5,
                firstName: "James",
                lastName: "Nzioka",
                email: "jamesnzioka@example.com",
                phone: "0734567890",
                location: "Kisumu",
                adress: "144, Victoria"
            },
            5:{
                id: 6,
                firstName: "Mike",
                lastName: "Simon",
                email: "mikesimon@example.com",
                phone: "0707987654",
                location: "Makueni",
                adress: "123, Salama"
            }

        }

        return{
            users
        }
   },
   actions:{
        addUser(payload) {
            //get the last key in the users object
            const existingKeys = Object.keys(this.users).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            //insert into object
            this.users[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
    editUser(id, payload) {
            // find the book in the object
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id //compare the ids
            );

            if (!user) {
                console.error(`No user found with id: ${id}`);
                return;
            }

            const [objectKey] = user;

            //replace the existing user data with what was received in payload
            this.users[objectKey] = {
                ...this.users[objectKey], 
                ...payload
            };
        },
    deleteUser(id) {
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id
            );
            if (!user) {
                console.error(`Cannot delete: No user found id: ${id}`);
                return;
            }

            const [objectKey] = user;

            delete this.users[objectKey];
        }
           
       },
   
   persist: true,
})