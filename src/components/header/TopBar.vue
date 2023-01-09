<template>
  <header
    class="top-bar"
    tabindex="-1"
  >
    <RouterLink
      class="logo-link"
      to="/"
    >
      <LogoIcon />
    </RouterLink>
    <NavigationMenu
      aria-label="Header menu"
      class="navigation"
      :items="menuOptions"
    />
    <ProfileMenu aria-label="Profile menu" />
  </header>
</template>
<script setup lang="ts">
import OrganizationIcon from '@/components/icons/OrganizationIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

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
.top-bar {
  display: grid;
  grid: auto / auto 1fr auto;
  background: linear-gradient(180deg, #09224f 0%, #073382 100%);
  > * {
    margin: auto;
    font-size: 15px;
    display: flex;
    align-items: center;
    font-weight: 500;
    line-height: 18px;
  }
  height: 70px;
  .navigation {
    margin-right: 1rem;
  }
}
</style>
