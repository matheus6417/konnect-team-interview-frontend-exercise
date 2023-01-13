<template>
  <section
    class="empty-state-wrapper"
  >
    <h4 class="empty-state-title">
      <slot name="title" />
    </h4>
    <p class="empty-state-message">
      <slot name="message" />
    </p>
    <div
      v-if="$slots.cta"
      class="empty-state-cta"
    >
      <TheButton
        size="small"
        variant="primary"
        @click="$emit('empty:clicked')"
      >
        <slot name="cta" />
      </TheButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.empty-state-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  text-align: center;
  gap: 1rem;

  .empty-state-title {
    font-size: $font-xl-size;
    font-weight: 600;
    line-height: 24px;
  }

  .empty-state-message {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
