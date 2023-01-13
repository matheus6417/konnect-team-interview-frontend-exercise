<template>
  <nav class="profile-menu">
    <a
      aria-label="Open Profile Menu"
      class="profile-link"
      role="button"
      tabindex="0"
      @click="triggerProfileMenu"
    >
      <UserAvatar m-auto />
      <span
        v-if="showName"
        class="profile-name"
      >Katherine Ellis</span>
    </a>
  </nav>
</template>
<script setup lang="ts">
defineProps({
  showName: {
    type: Boolean,
    default: true,
  },
})

const triggerProfileMenu = () => {
  alert('Open Profile Menu!')
}
</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';
.profile-menu {
  height: 100%;
  .profile-name {
    max-width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    user-select: none;
    font-size: $font-md-size;
    opacity: 0.8;
    transition: $transition-default;
  }
  .profile-link {
    display: flex;
    height: 100%;
    gap: 0.75rem;
    padding-inline: 1.25rem;
    color: $white;
    background-color: #072863;
    text-decoration: none;
    white-space: nowrap;
    > * {
      display: flex;
      align-items: center;
    }
  }
  &:hover {
    .profile-name {
      opacity: 1;

    }
  }
}
</style>
