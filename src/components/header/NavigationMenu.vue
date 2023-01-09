<template>
  <nav class="navigation-menu">
    <ul class="navigation-items">
      <li
        v-for="(item, i) in items"
        :key="i"
      >
        <a
          class="item-link"
          @click="item.action"
        >
          <div class="item-icon">
            <component :is="item.icon" />
          </div>
          <div class="item-name">
            {{ item.title }}
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

type NavigationItem = {
  title: string
  icon: unknown
  action: () => void
}

defineProps({
  items: {
    type: Array as PropType<NavigationItem[]>,
    required: true,
  },
})
</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';
.navigation-menu {
  height: 100%;
}

.navigation-items {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.25rem;
}

.item-link {
  display: flex;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  height: 3rem;
  gap: 0.75rem;
  padding-inline: 1rem;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 15px;
  line-height: 18px;
  text-decoration: none;
  transition: $transition-default;
  &:hover {
    opacity: 1;
    background-color: #ffffff1a;
  }
}
.item-icon {
  justify-content: center;
  display: flex;
}
</style>
