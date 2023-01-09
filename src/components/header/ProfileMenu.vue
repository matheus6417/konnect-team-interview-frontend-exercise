<template>
  <nav class="profile-menu">
    <a
      aria-label="Open Profile Menu"
      class="profile-link"
      role="button"
      tabindex="0"
    >
      <UserAvatar>
        <AvatarIcon />
      </UserAvatar>
      <span class="profile-name">Katherine Ellis</span>
    </a>
  </nav>
</template>
<style scoped lang="scss">
.profile-menu {
  height: 100%;
  .profile-name {
    max-width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    user-select: none;
    opacity: 0.8;
  }
  .profile-link {
    display: flex;
    height: 100%;
    gap: 1rem;
    padding-inline: 1.5rem;
    color: #ffffff;
    background-color: #072863;
    text-decoration: none;
    white-space: nowrap;
    > * {
      display: flex;
      align-items: center;
    }
  }
  &:hover {
    .profile-link {
      opacity: 1;
    }
  }
}
</style>
