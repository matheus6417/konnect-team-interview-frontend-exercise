<template>
  <EmptyState
    @empty:clicked="$router.back()"
  >
    <template #title>
      Nothing to see here!
    </template>
    <template #message>
      We couldn't find the page you were looking for.
    </template>
    <template #cta>
      Go Back
    </template>
  </EmptyState>
</template>
