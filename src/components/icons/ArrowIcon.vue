<template>
  <svg :style="{
    transform: `rotate(${rotations[direction]}deg)`
  }" xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
    <path d="M14.1543 4.49609L10.3574 0.699219V3.8457H0.0566406V5.14648H10.3574V8.29297L14.1543 4.49609Z" :fill="color"/>
  </svg>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  direction: {
    type: String as PropType<'left' | 'right' | 'up' | 'down'>,
    default: 'right',
  },
  color: {
    type: String,
    default: '#1456CB',
  },
})

const rotations = {
  left: 180,
  right: 0,
  up: 270,
  down: 90,
}
</script>
