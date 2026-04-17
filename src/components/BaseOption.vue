<script setup>
    defineProps({
        value: Number,
        affichage: String
    })
</script>

<template>
    <option :value="value" class="option-select">{{affichage}}</option>
</template>

<style>
    option {
        background-color: pink;
    }
</style>