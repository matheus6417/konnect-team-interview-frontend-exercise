<template>
  <button
    :aria-label="ariaLabel"
    class="the-button"
    :class="[variant, size, { 'rounded': rounded }]"
    role="button"
    :title="ariaLabel"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

const buttonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  link: 'btn-link',
  outlined: 'outline',
} as const

const buttonSize = {
  small: 'small',
  medium: 'medium',
} as const

defineProps({
  ariaLabel: {
    type: String,
    default: 'Button',
  },
  variant: {
    type: String as PropType<
    (typeof buttonVariant)[keyof typeof buttonVariant]
    >,
    default: 'primary',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<(typeof buttonSize)[keyof typeof buttonSize]>,
    default: 'medium',
  },
})
</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';
.the-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: $font-md-size;
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
  transition: $transition-default;
  gap: 0.5rem;
  > * {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
    filter: saturate(0)
  }
  &:hover {
    opacity: 1;
  }
  &.small {
    height: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 13px;
    line-height: 1rem;
    &.rounded {
      width: 2rem;
      padding: 0;
    }
  }
  &.medium {
    height: 2.75rem;
    padding: 12px 1.5rem;
    border-radius: 6.25rem;
    font-size: $font-lg-size;
    line-height: 1.25rem;
    &.rounded {
      width: 2.75rem;
      padding: 0;
    }
    &:has(svg) {
      padding-left: 1rem;
    }
  }
  &.primary {
    background: $green-500;
    color: $white;
    &:hover {
      background-color: darken($green-500, 5%);
    }
  }
  &.secondary {
    background-color: $blue-100;
    color: $blue-400;
    &:hover {
      background-color: darken($blue-100, 5%);
    }
  }
  &.btn-link {
    background-color: transparent;
    color: $blue-400;
    &:hover {
      text-decoration: underline;
    }
  }

  &.outline {
    outline-style: inherit;
    border: 1px solid lighten($blue-400, 33%);
    background-color: $white;
    color: $blue-400;
    &:hover {
      border-color: $blue-400;
    }
  }

}
</style>
