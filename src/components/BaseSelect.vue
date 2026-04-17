<script setup>
    // sans le chemin relatif './' vue va chercher dans le dossier node_modules
    import BaseOption from './BaseOption.vue'

    defineProps({
        id: String,
        label: String,
        modelValue: String,
        options: Array
    })

    const model = defineModel('modelValue')
</script>

<template>
    <div class="select-field">
        <label :for="id">{{label}}</label>
        <select :id="id" v-model="model">
             <!-- :xx = "xxx" est de v-bind et le :key est essentiel pour repérer les composants générer et les différencier -->
            <BaseOption v-for="opt in options" :value="opt.value" :affichage="opt.affichage"/>
        </select>
    </div>
</template>

<style>
    .select-field {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        padding: 0.5rem 0;
    }

    .select-field > select {
        padding: 0.5rem;
        flex: 1;
        border: 1px solid gray;
        border-radius: 0.5rem;
        background-color: transparent;
    }
</style>