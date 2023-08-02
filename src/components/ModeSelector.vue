<script setup lang="ts">
import { ref, watch } from 'vue'
import ModeButton from './ModeButton.vue'

export type Mode = {
  text: string
  minutes: number
}

const props = defineProps<{
  modes: Mode[]
  mode: Mode
}>()

const emit = defineEmits<{
  change: [localMode: Mode]
}>()

const localMode = ref(props.modes[0].text)

function setMode(m: Mode) {
  localMode.value = m.text
  emit('change', m)
}

watch(
  () => props.mode,
  () => {
    localMode.value = props.mode.text
  }
)
</script>

<template>
  <div class="flex gap-2 border border-[#65737e] rounded-full p-[2px] leading-none">
    <ModeButton :is-active="localMode === m.text" :mode="m" v-for="m in modes" @click="setMode" />
  </div>
</template>
