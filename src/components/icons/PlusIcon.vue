<template>
  <svg
    :fill="color"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      fill="inherit"
      height="12"
      rx="1"
      width="2.77"
      x="8.62"
      y="4"
    />
    <rect
      fill="inherit"
      height="12"
      rx="1"
      transform="rotate(90 16 8.62)"
      width="2.77"
      x="16"
      y="8.62"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'currentColor',
  },
})
</script>
