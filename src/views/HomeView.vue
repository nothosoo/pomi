<script setup lang="ts">
import { nextTick, ref } from 'vue'
import SocialLinks from '@/components/SocialLinks.vue'
import Controls from '@/components/Controls.vue'
import PCount from '@/components/PCount.vue'
import ModeSelector, { type Mode } from '@/components/ModeSelector.vue'
import Timer, { type TimerAction } from '@/components/Timer.vue'
import { modes } from '@/utils/constants'

const mode = ref<Mode>(modes[0])
const action = ref<TimerAction>('stop')
const pomodoroCount = ref(0)

function modeChange(_mode: Mode) {
  mode.value = _mode
  action.value = 'stop'
}

function setAction(_action: TimerAction) {
  action.value = _action
  if (_action === 'reset') {
    nextTick(() => {
      action.value = 'stop'
    })
  }
}

function onEnd() {
  action.value = 'stop'
  if (mode.value.text === modes[0].text) {
    if (pomodoroCount.value < 3) {
      pomodoroCount.value++
      mode.value = modes[1]
    } else {
      pomodoroCount.value = 0
      mode.value = modes[2]
    }
  } else {
    mode.value = modes[0]
  }
}
</script>

<template>
  <main class="flex flex-col gap-5 justify-center items-center h-screen bg-[#2b303b]">
    <ModeSelector :modes="modes" @change="modeChange" :mode="mode" />
    <Timer :minutes="mode.minutes" :action="action" @end="onEnd" />
    <Controls @start="setAction('start')" @stop="setAction('stop')" @reset="setAction('reset')" />
    <PCount :count="pomodoroCount" />
    <SocialLinks />
  </main>
</template>
