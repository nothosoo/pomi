<script setup lang="ts">
defineProps<{
  text: string
  isActive: boolean
  isFinished: boolean
}>()
</script>

<template>
  <span
    class="bg-[#c0c5ce] w-2 h-2"
    :class="{
      'bg-[#76f792]': isFinished,
      'bg-[#f7768e]': isActive
    }"
  />
</template>
