<template>
  <header
    ref="headerRef"
    class="top-bar-wrapper"
    tabindex="-1"
  >
    <div class="top-bar-content container">
      <RouterLink
        class="logo-link"
        to="/"
      >
        <LogoIcon :compact="isMobile" />
      </RouterLink>
      <NavigationMenu
        aria-label="Header menu"
        class="navigation"
        :items="menuOptions"
      />
      <ProfileMenu
        aria-label="Profile menu"
        :show-name="!isMobile"
      />
    </div>
  </header>
</template>
<script setup lang="ts">
import OrganizationIcon from '@/components/icons/OrganizationIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
const headerRef = ref(null)
const { width } = useElementSize(headerRef)

const isMobile = computed(() => width.value < 768)
const menuOptions = [
  {
    title: 'Organization',
    icon: OrganizationIcon,
    action: () => {
      alert('Go to Organization Page!')
    },
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    action: () => {
      alert('Go to Settings Page!')
    },
  },
]
</script>
<style scoped lang="scss">
.top-bar-wrapper {
  z-index: 9;
  background: linear-gradient(180deg, #09224f 0%, #073382 100%);
}

.top-bar-content {
  display: grid;
  grid: auto / auto 1fr auto;
  > * {
    margin: auto;
    display: flex;
  }
  height: clamp(60px, 10vw, 70px);
  .navigation {
    margin-right: 1rem;
  }
}
</style>
