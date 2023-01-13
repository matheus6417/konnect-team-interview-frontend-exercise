<template>
  <ul class="avatar-list">
    <li
      v-if="hiddenUsersCount"
      :style="getZIndex(0)"
    >
      <div class="hidden-avatars-count">
        + {{ hiddenUsersCount }}
      </div>
    </li>
    <li
      v-for="({ id, name, avatar }, i) in users.slice(0, limit)"
      :key="id"
      :style="getZIndex(i + 1)"
    >
      <UserAvatar
        :avatar-url="avatar"
        :title="name"
      />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { User } from '@/api/response/User'

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    default: () => [],
  },
  limit: {
    type: Number,
    default: 2,
  },
})
const usersCount = computed(() => props.users.length)

const hiddenUsersCount = computed(() => {
  return usersCount.value > props.limit ? usersCount.value - props.limit : 0
})

const getZIndex = (i: number) => {
  return {
    zIndex: usersCount.value - i,
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.avatar-list {
  padding: 0.5rem;
  display: flex;
  li {
    max-width: 22px;
  }
  img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
}
.hidden-avatars-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 2px solid $white;
  border-radius: 100%;
  color: $black-300;
  font-weight: 600;
  font-size: $font-xs-size;
  line-height: 24px;
  background-color: $grey-200;
}
</style>
