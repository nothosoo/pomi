<script setup lang="ts">
import PCountItem from '@/components/PCountItem.vue'

defineProps<{
  count: number
}>()

const items = ['P', 'P', 'P', 'P']
</script>

<template>
  <div class="flex gap-1">
    <PCountItem
      :text="item"
      :is-active="i === count"
      :is-finished="i < count"
      v-for="(item, i) in items"
    />
  </div>
</template>
