<script setup>
import { useAuth } from '@/services/auth.js'
import { useRouter } from "vue-router";

const router = useRouter();
const { logout } = useAuth()
const isAuthenticated = localStorage.getItem('isAuthenticated')
const isAdmin = localStorage.getItem('isAdmin')
const user = JSON.parse(localStorage.getItem('user'))

let role = 0
let letter = ''
if (user) {
    letter = user.firstname[0]
    role = user.role
}

function logOut() {
    logout()
    router.push('/').then(() => {
        router.go(0)
    });
}
</script>

<template>
    <v-app-bar class="bg-primary" flat>
        <router-link to="/" class="d-flex align-center ml-2">
            <v-img src="/public/farmlogo.png" width="80" height="80" contain></v-img>
        </router-link>

        <v-app-bar-title class="flex-grow-0 mr-4">Smart Farm Season</v-app-bar-title>

        <v-btn to="/" variant="text">Home</v-btn>
        <v-btn to="/product" variant="text">Products</v-btn>
        <v-btn to="/admin" variant="text">Admin</v-btn>
        <v-btn to="/seller_view" variant="text" v-if="role == 3">Seller View</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon variant="tonal" v-if="isAuthenticated" class="mr-2">
            {{ letter }}
            <v-menu activator="parent">
                <v-list density="compact">
                    <v-list-item to="/profile">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="logOut">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>

        <v-btn to="/login" variant="text" v-else class="mr-2">Login</v-btn>
    </v-app-bar>
</template>
