<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<template>
  <nav class="flex items-center justify-between px-4 py-3 bg-blue-600 text-white shadow-lg rounded-b-2xl">
    <div class="flex items-center gap-2">
      <span class="text-2xl">🎲</span>
      <span class="font-bold text-lg tracking-wide">Ma Ludothèque</span>
    </div>
    <button class="md:hidden" @click="menuOpen = !menuOpen">
      <span class="i-heroicons-bars-3 text-3xl"></span>
    </button>
    <ul class="hidden md:flex gap-8 font-semibold">
      <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
      <li><router-link to="/ajouter" class="hover:underline">Ajouter</router-link></li>
      <li><router-link to="/profil" class="hover:underline">Profil</router-link></li>
    </ul>
    <ul v-if="menuOpen" class="absolute top-16 right-4 bg-white text-blue-600 p-4 rounded-xl shadow-lg flex flex-col gap-4 md:hidden z-50">
      <li><router-link to="/" @click="menuOpen = false">Accueil</router-link></li>
      <li><router-link to="/ajouter" @click="menuOpen = false">Ajouter</router-link></li>
      <li><router-link to="/profil" @click="menuOpen = false">Profil</router-link></li>
    </ul>
  </nav>
</template>
