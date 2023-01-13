<template>
  <section class="content-card">
    <div
      v-if="$slots.header"
      class="card-header"
    >
      <slot name="header" />
    </div>
    <div
      v-if="$slots.actions"
      class="card-actions"
    >
      <slot name="actions" />
    </div>
    <h4
      v-if="$slots.title"
      class="card-title"
    >
      <slot name="title" />
    </h4>
    <p
      v-if="$slots.description"
      class="card-description"
    >
      <slot name="description" />
    </p>
    <div
      v-if="$slots.content"
      class="card-content"
    >
      <slot name="content" />
    </div>
    <div
      v-if="$slots.footer"
      class="card-footer"
    >
      <slot name="footer" />
    </div>
  </section>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.content-card {
  display: grid;
  padding: 1rem 1.5rem;
  background-color: white;
  container: card-container / inline-size;
  grid-template-columns: repeat(2, minmax(0, auto));
  grid-template-rows: repeat(3, auto) 1fr;
  grid-auto-flow: row;
  transition: box-shadow 0.2s ease-in-out;
  grid-template-areas:
    'header actions'
    'title title'
    'description description'
    'content footer';
  > * {
    padding: 0.25rem;
  }
  &:hover {
    box-shadow: 0 1px 10px $black-5;
  }
}
.card {
  &-header {
    grid-area: header;
  }
  &-actions {
    grid-area: actions;
  }
  &-title {
    grid-area: title;
  }
  &-description {
    grid-area: description;
  }
  &-content {
    grid-area: content;
  }
  &-footer {
    grid-area: footer;
  }
}
.card-header,
.card-description,
.card-title {
  justify-self: start;
  align-self: start;
}

.card-actions {
  justify-self: end;
  align-self: start;
}

.card-header {
  font-weight: 400;
  font-size: $font-xs-size;
  line-height: 16px;
  color: $grey-600;
}

.card-description {
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #707888;
}

.card-content {
  justify-self: start;
  align-self: end;
  font-weight: 600;
  font-size: $font-xs-size;
  display: flex;
  color: $black-400;
}

.card-footer {
  justify-self: end;
  align-self: end;
}
</style>
