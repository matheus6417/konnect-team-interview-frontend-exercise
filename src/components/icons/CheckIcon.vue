<template>
  <svg
    fill="none"
    height="20"
    :stroke="color"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 7L8 13L5 10.0001"
      stroke="inherit"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.25"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#14B59A',
  },
})
</script>
