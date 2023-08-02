<script setup lang="ts">
import type { Mode } from './ModeSelector.vue'

defineProps<{
  mode: Mode
  isActive: boolean
}>()

defineEmits<{
  click: [mode: Mode]
}>()
</script>

<template>
  <button
    class="text-sm text-[#D8D9DA] font-light rounded-full px-2"
    :class="{
      'bg-[#65737e] text-[#D8D9DA]': isActive
    }"
    v-text="mode.text"
    @click="$emit('click', mode)"
  />
</template>
