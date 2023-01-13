<template>
  <div class="header-wrapper">
    <div class="page-header">
      <h1 class="title">
        <slot name="header" />
      </h1>
      <p class="description">
        <slot name="description" />
      </p>
      <div class="actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header-wrapper {
  container: header-container / inline-size;
}
.page-header {
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'title actions'
    'description actions';
  .title {
    grid-area: title;
  }
  .description {
    grid-area: description;
  }
  .actions {
    grid-area: actions;
    justify-self: end;
  }
}

@container header-container (width <= 768px) {
  .page-header {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr auto;
    grid-template-areas:
    'title'
    'description'
    'actions';
  }
}
</style>
