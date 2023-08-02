<script setup lang="ts">
import PButton from './PButton.vue'

defineEmits<{
  start: []
  reset: []
  stop: []
}>()
</script>

<template>
  <div class="flex gap-2">
    <PButton @click="$emit('start')"> Start </PButton>
    <PButton @click="$emit('stop')"> Stop </PButton>
    <PButton @click="$emit('reset')"> Reset </PButton>
  </div>
</template>
