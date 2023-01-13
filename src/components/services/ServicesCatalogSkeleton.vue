<template>
  <div
    class="services-list"
  >
    <ContentCard
      v-for="item in loadingSize"
      :key="item"
      animate-pulse
    >
      <template #header>
        <div class="h-2.5 bg-gray-200 rounded-full w-40 my-2" />
      </template>
      <template #actions>
        <div class="h-7 bg-gray-300 rounded-full w-24" />
      </template>
      <template #title>
        <div class="h-2.5 bg-gray-400 rounded-full w-62 my-3" />
      </template>
      <template #description>
        <div class="h-2.5 bg-gray-200 rounded-full mb-2 w-55" />
        <div class="h-2.5 bg-gray-200 rounded-full w-32" />
      </template>
      <template #content>
        <div class="flex flex-col">
          <div class="h-2.5 bg-gray-300 rounded-full w-32 mb-2" />
          <div class="h-2.5 bg-gray-300 rounded-full w-32 mb-2" />
          <div class="h-2.5 bg-gray-300 rounded-full w-32 mb-2" />
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-center mt-4">
          <svg
            aria-hidden="true"
            class="w-10 h-10 mr-2 text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            clip-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            fill-rule="evenodd"
          /></svg>
        </div>
      </template>
    </ContentCard>
  </div>
</template>
<script setup lang="ts">
defineProps({
  loadingSize: {
    type: Number,
    default: 9,
  },
})
</script>
<style lang="scss" scoped>
.services-list {
  display: grid;
  grid: repeat(auto-fill, minmax(200px, 250px)) / repeat(
      auto-fill,
      minmax(325px, 1fr)
    );
  grid-gap: 2rem;
}
</style>
