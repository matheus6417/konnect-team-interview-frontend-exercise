<template>
  <section class="services-hub-layout">
    <PageHeader>
      <template #header>
        Service Hub
      </template>
      <template #description>
        Organize services, manage and track versioning and API service
        documentation. <a href="/help">Learn More</a>
      </template>
      <template #actions>
        <div class="flex gap-6">
          <TheInput
            v-model="searchTerm"
            placeholder="Search"
            @input="onSearch"
          >
            <template #icon>
              <SearchIcon />
            </template>
          </TheInput>
          <TheButton
            @click="newService()"
          >
            <PlusIcon />
            Service Package
          </TheButton>
        </div>
      </template>
    </PageHeader>
    <div v-if="error">
      <EmptyState @empty:clicked="$router.go(0)">
        <template #title>
          Services not found
        </template>
        <template #message>
          Looks like we couldn't reach the server, please try again later.
        </template>
        <template #cta>
          Refresh page
        </template>
      </EmptyState>
    </div>
    <template v-else-if="isLoading">
      <ServicesCatalogSkeleton />
      <ListPaginationSkeleton />
    </template>
    <template v-else>
      <ServicesCatalog
        :services="currentPageItems"
        @empty-state:clicked="newService"
        @service:clicked="$router.push(`/service/${$event}`)"
      />

      <ListPagination
        v-model:currentPageItems="currentPageItems"
        v-model:currentPageNumber="currentPageNumber"
        :data="services"
        :data-name="'services'"
        :page-size="9"
      />
    </template>
  </section>
</template>
<script setup lang="ts">
import { useApi } from '@/api'
import { debounce } from 'lodash/fp'
import { storeToRefs } from 'pinia'
const servicesStore = useServicesStore()

const {
  services,
  searchTerm,
  currentPageNumber,
  currentPageItems,
} = storeToRefs(servicesStore)

const {
  data,
  isFinished,
  execute: fetchServices,
  error,
  isLoading,
} = useApi.services.list(searchTerm.value)

onBeforeMount(() => {
  if (services.value.length === 0) {
    fetchServices()
  }
})

const newService = () => {
  alert('new service')
}

watch(isFinished, () => {
  if (!data.value) return
  servicesStore.setServices(data.value)
})

const search = async () => {
  await fetchServices(`/services${searchTerm.value ? `?q=${searchTerm.value}` : ''}`)
}

const DEBOUNCE_WAIT_MS = 600
const debounceApply = debounce(DEBOUNCE_WAIT_MS, (fn: () => void) => fn())

const onSearch = () => {
  isLoading.value = true
  currentPageNumber.value = 1
  debounceApply(search)
}

</script>
<style lang="scss" scoped>
.services-hub-layout {
  width: 100%;
  display: grid;
  grid: auto 1fr auto / 1fr;
  gap: 1rem;
}
</style>
