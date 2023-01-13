<template>
  <div v-if="isLoading">
    Loading
  </div>
  <div v-else-if="error || !isService(service)">
    <EmptyState @empty:clicked="$router.push('/')">
      <template #title>
        Service not found
      </template>
      <template #message>
        We couldn't find the service you're looking for.
      </template>
      <template #cta>
        Go to services catalog
      </template>
    </EmptyState>
  </div>
  <section
    v-if="service"
    class="service-layout"
  >
    <PageHeader>
      <template #header>
        <div class="flex gap-3 flex-col items-start">
          <TheButton
            size="small"
            variant="secondary"
            @click="$router.push('/')"
          >
            <ArrowIcon
              direction="left"
            />
            Services Hub
          </TheButton>
          {{ service.name }}
        </div>
      </template>
      <template #description>
        {{ service.description }}
      </template>
      <template #actions>
        <TheButton disabled>
          Edit
        </TheButton>
      </template>
    </PageHeader>
    <div class="flex gap-12 mb-8 flex-wrap">
      <section>
        <h3 mb-3>
          Status
        </h3>
        <ServiceStatus
          :configured="service.configured"
          :published="service.published"
        />
      </section>
      <section>
        <h3 mb-3>
          Metrics
        </h3>
        <ServiceMetrics
          :configured="service.configured"
          :metrics="service.metrics"
        />
      </section>
      <section>
        <h3 mb-3>
          Contributors
        </h3>
        <AvatarList :users="getUsersFromServiceVersions(service.versions)" />
      </section>
    </div>
    <section>
      <h4>Versions ({{ service.versions.length }})</h4>
      <ServiceVersionsList
        :service-type="service.type"
        :versions="service.versions"
      />
    </section>
  </section>
</template>
<script setup lang="ts">
import { isUndefined } from 'lodash/fp'
import { getUsersFromServiceVersions, isService } from '@/domain/services'
import { useApi } from '@/api'
const servicesStore = useServicesStore()
const route = useRoute()

const {
  data: service,
  execute: fetchService,
  error,
  isLoading,
} = useApi.services.get(`${route.params.id}`)

onBeforeMount(() => {
  const fromStore = servicesStore.getServiceById(`${route.params.id}`)
  isUndefined(fromStore) ? fetchService() : (service.value = fromStore)
})
</script>

<style scoped lang="scss">
.service-layout {
  width: 100%;
  display: grid;
  grid: auto 1fr auto / 1fr;
  gap: 1rem;
}
</style>
