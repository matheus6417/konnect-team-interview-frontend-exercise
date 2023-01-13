<template>
  <div
    v-if="services.length"
    class="services-list"
  >
    <ContentCard
      v-for="{
        id,
        metrics,
        published,
        configured,
        name,
        description,
        versions,
      } in services"
      :id="id"
      :key="id"
    >
      <template #header>
        <ServiceStatus
          :configured="configured"
          my-1
          :published="published"
        />
      </template>
      <template #actions>
        <TheButton
          v-if="versions.length"
          :size="'small'"
          :title="'View versions'"
          :variant="'secondary'"
          @click="emit('service:clicked', id)"
        >
          {{ versions.length }}
          {{ versions.length > 1 ? 'versions' : 'version' }}
        </TheButton>
      </template>
      <template #title>
        <a
          hover:underline
          @click="emit('service:clicked', id)"
        >
          {{ name }}
        </a>
      </template>
      <template #description>
        <span class="truncate-2">
          {{ description }}
        </span>
      </template>
      <template #content>
        <ServiceMetrics
          :configured="configured"
          :metrics="metrics"
        />
      </template>
      <template #footer>
        <AvatarList
          v-if="published"
          :users="getUsersFromServiceVersions(versions)"
        />
      </template>
    </ContentCard>
  </div>
  <div v-else>
    <EmptyState @empty:clicked="emit('empty-state:clicked')">
      <template #title>
        No services found
      </template>
      <template #message>
        Do you prefer to create a new service?
      </template>
      <template #cta>
        New Service
      </template>
    </EmptyState>
  </div>
</template>
<script setup lang="ts">
import { getUsersFromServiceVersions } from '@/domain/services/getUsersFromServiceVersions'
import { Service } from '@/api/response/'
import { PropType } from 'vue'
defineProps({
  services: {
    type: Array as PropType<Service[]>,
    default: () => [],
  },
})
const emit = defineEmits<{
  (eventName: 'service:clicked', data: string): void
  (eventName: 'empty-state:clicked'): void
}>()
</script>
<style lang="scss" scoped>
.services-list {
  display: grid;
  grid: repeat(auto-fill, minmax(200px, 250px)) / repeat(
      auto-fill,
      minmax(325px, 1fr)
    );
  grid-gap: 2.5rem;
}
</style>
