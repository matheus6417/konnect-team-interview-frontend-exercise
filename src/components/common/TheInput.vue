<template>
  <span class="inputtext-wrapper">
    <span
      v-if="$slots.icon"
      class="icon"
    >
      <slot name="icon" />
    </span>
    <input
      v-model="modelValue"
      class="inputtext"
      :placeholder="placeholder"
      type="text"
      @input="$emit('input', $event)"
    >
  </span>
</template>
<script setup lang="ts">
const { modelValue } = defineModel<{
  modelValue: string
}>()

defineProps<{
  placeholder: string
}>()

defineEmits<{
  (eventName: 'input', data: string): void
}>()
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.inputtext-wrapper{
  display: flex;
  align-items: center;
  position: relative;

  &:has(.icon) input{
    padding-left: 2.5rem;
  }
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    height: 2.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 0.5rem;
  }
}

.inputtext {
  display: block;
  box-sizing: border-box;
  width: 200px;
  padding: 0.625rem 1rem;
  border: none;
  border-radius: 3px;
  color: $grey-500;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: $white;
  box-shadow: inset 0 0 0 1px #e7e7ec;
  transition: all 0.1s ease;
}
.inputtext:focus {
  outline: none;
  box-shadow: inset 0 0 0 1px #3972d5;
}
.inputtext:disabled {
  cursor: not-allowed;
  background-color: $grey-100;
}
</style>
