<script setup>
    import { reactive, ref } from 'vue'
    import BaseInput from '../components/BaseInput.vue'
    import BaseSelect from '../components/BaseSelect.vue'
    import router from '../router/index.js'

    const inputs = ref([
        {id:'email', label:'Email', type:'email', placeholder:'Enter your email', modelValue:'email'},
        {id:'password', label:'Password', type:'password', placeholder:'Enter a strong password for your safety', modelValue:'password'},
    ])

    const userForm = reactive({
        email: '',
        password: ''
    })

    function closeForm()
    {
        router.back();
    }

    // function addUser()
    // {
    //     try{
    //         const response = fetch("http://localhost:8000/api/register", {
    //         method: "post",
    //         headers: {
    //             'Content-type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         body: JSON.stringify(userForm)
    //         })
    //         console.log(response.json().token)
    //         if(response.ok)
    //         {
    //             localStorage.setItem('user_token', response.json().token)
    //         }
    //         closeForm()
    //     }catch(error){
    //         console.log('error === '+error)
    //     }
    // }
</script>

<template>
    <div id="register_form_container" class="form_container">
        <button class="form_close" type="button" @click="closeForm">x</button>
        <form id="register_form" v-on:submit.prevent="addUser">
            <h1>Login</h1>
            <hr>
            <BaseInput v-for="inp in inputs" :key="inp.id" :id="inp.id" :label="inp.label" :type="inp.type" :placeholder="inp.placeholder" v-model="userForm[inp.id]"/>
            <!-- Si on veut transmettre toutes les propriétés d'un objet v-bind est le meilleur choix -->
            <router-link to="/register">New? register now for more features</router-link>

            <!-- Attention: lorsqu'un boutton n'a pas de type il est considéré de type submit -->
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<style>

    #register_form {
        width: 40%;
        padding: 3rem;
        border: 1px solid black;
        border-radius: 1rem;
        background-color: pink;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        color: black;
    }

    #register_form > button {
        position: relative;
        top: 1.5rem;
        padding: 0.5rem;
        border: none;
        background-color: palevioletred;
        border-radius: 1rem;
    }

    hr {
        height: 0.1rem;
        border: none;
        background-color: palevioletred;
    }
</style>