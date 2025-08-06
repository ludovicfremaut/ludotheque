<script setup lang="ts">
import { onMounted, ref } from 'vue'

const message = ref('Chargement...')

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/')
    const data = await res.text()
    message.value = data
  } catch (err) {
    console.error(err)
    message.value = 'Erreur : ' + String(err)
  }
})
</script>

<template>
  <div class="text-center p-6 text-xl text-green-600">
    {{ message }}
  </div>
</template>
