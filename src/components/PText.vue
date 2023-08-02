<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <p class="text-5xl text-center font-bold text-[#c0c5ce]" v-text="text" />
</template>
