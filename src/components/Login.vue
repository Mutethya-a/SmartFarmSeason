//login
<script setup>
import { ref } from 'vue'
import{useAuth} from '../services/auth.js'
import { useRouter } from "vue-router";
const router = useRouter(); 

const{ checkCredentials } = useAuth()

const rules = {
    required: value => !!value || 'Required.',//if statements 
    min: v => v.length >= 8 || 'Min 8 characters', //if statements
    passwordMatch: () => password == confirmPassword || 'Passwords must match' //function to check passwords are matching
  }  

  //data models
const email= ref(null)
const password = ref(null) 
const showPassword = ref(false)
  
function login(){
const data={
    email:email.value,
    password:password.value,
}

  checkCredentials(data)
  router.push('/').then(() => {
    router.go(0) // Refresh the page after navigation
  });

}

</script>
<template>
<v-container align="center" class="mt-16">
    <v-row>
        <v-col>
            <v-card max-width="80%" class="bg-secondary" >
                <v-img src="/FullLogo.jpg" height="100" width="200" class="mt-4"></v-img>
                <v-card-title class="text-center">Login</v-card-title>
                <v-divider></v-divider>  
                <!-- Divider helps us differentiate between the title and form -->
                
             <v-form class="ma-8">
                <v-row>
                    <v-col md="4">
                        <div>Email</div>
                    </v-col>
                    <v-col md="4">
                        <v-text-field v-model="email"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="4">
                        <div>Password</div>
                    </v-col>
                    <v-col md="4">
                        <v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="6">
                        <v-btn @click="login()" block>Login</v-btn>
                    </v-col>
                    
                    <v-col md="6">
                        <div>New user?
                            <router-link to="/sign_up">Create account</router-link>
                        </div>
                    </v-col>
                    
                </v-row>
                

             </v-form>
            </v-card>
        </v-col>
    </v-row>
</v-container>


</template>

//data modelling in programming
//vue 3
//reactivity, v-model, data model Object
//give an example for wishlist- online booksStore