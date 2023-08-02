<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PText from './PText.vue'

export type TimerAction = 'start' | 'stop' | 'reset'

const props = defineProps<{
  minutes: number
  action: TimerAction
}>()

const emit = defineEmits<{
  end: []
}>()

const totalSeconds = ref(props.minutes * 60)
const minute = computed(() => String(Math.floor(totalSeconds.value / 60)).padStart(2, '0'))
const second = computed(() => String(totalSeconds.value % 60).padStart(2, '0'))
var worker: Worker
const interval = ref(0)

function startTimer() {
  totalSeconds.value--
  worker.postMessage({ action: 'start' })
}

watch(
  () => props.minutes,
  () => {
    totalSeconds.value = props.minutes * 60
  }
)

watch(
  () => props.action,
  () => {
    if (props.action === 'start') {
      startTimer()
    } else if (props.action === 'stop') {
      worker.postMessage({ action: 'stop', interval: interval.value })
    } else if (props.action === 'reset') {
      totalSeconds.value = props.minutes * 60
    }
  }
)

watch(
  () => totalSeconds.value,
  () => {
    document.title = `${minute.value}:${second.value} - Pomi`
  }
)

if (window.Worker) {
  worker = new Worker(new URL('../script/worker.js', import.meta.url))
  worker.onmessage = (e) => {
    if (e.data.type === 'second') {
      if (totalSeconds.value === 0) {
        worker.postMessage({ action: 'stop', interval: interval.value })
        emit('end')
        return
      }
      totalSeconds.value--
    } else if (e.data.type === 'started') {
      interval.value = e.data.interval
    }
  }
}
</script>

<template>
  <div class="flex">
    <div class="w-20">
      <PText :text="minute" />
    </div>
    <div>
      <PText text=":" />
    </div>
    <div class="w-20">
      <PText :text="second" />
    </div>
  </div>
</template>
