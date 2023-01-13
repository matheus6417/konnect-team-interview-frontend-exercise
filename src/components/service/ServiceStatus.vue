<template>
  <div
    flex
    items-center
  >
    <template v-if="!configured">
      <SpinnerIcon animate-spin />
      <span> In progress </span>
    </template>
    <template v-else-if="published">
      <CheckIcon />
      <span> Published to Portal </span>
    </template>
    <template v-else-if="!published">
      <XIcon />
      <span> Unpublished </span>
    </template>
  </div>
</template>
<script setup lang="ts">
defineProps({
  published: {
    type: Boolean,
    required: true,
  },
  configured: {
    type: Boolean,
    required: true,
  },
})
</script>
