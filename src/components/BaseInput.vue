<script setup>
    defineProps({
        id: String,
        label: String,
        type: String,
        placeholder: String
    })

    const model = defineModel()
</script>

<template>
    <div class="input-field">
        <label :for="id">{{label}}</label>
        <input :id="id" :type="type" v-model="model" :placeholder="placeholder">
    </div>
</template>

<style>
    .input-field {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .input-field > input {
        padding: 0.5rem;
        border: 1px solid gray;
        border-radius: 0.5rem;
        background-color: transparent;
    }

    .input-field > input::placeholder{
        color: black;
    }
</style>