<script setup lang="ts">
import useServices from '@/composables/useServices'
import { keys } from 'lodash/fp'
// Import services from the composable
const { services, loading } = useServices()

// Set the search string to a Vue ref
const searchQuery = ref('')
</script>

<template>
  <div>
    <h1>Service Catalog</h1>
    <input
      v-model="searchQuery"
      placeholder="Search services"
    >
    <div
      v-for="service in services"
      :key="service.id"
      bg-gray
      mb-3
    >
      <div
        v-for="(prop,i) in keys(service)"
        :key="i"
      >
        <b>{{ prop }}</b>: {{ service[prop] }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
