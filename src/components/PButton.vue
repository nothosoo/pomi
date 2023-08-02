<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    @click="$emit('click')"
    class="bg-[#4f5b66] text-[#D8D9DA] hover:bg-[#65737e] text-sm font-medium py-1 px-2 rounded-lg leading-none"
  >
    <slot />
  </button>
</template>
