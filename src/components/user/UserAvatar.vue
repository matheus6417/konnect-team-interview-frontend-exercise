<template>
  <div class="user-avatar">
    <UseImage
      v-if="avatarUrl"
      :src="avatarUrl"
    >
      <template #loading>
        <SpinnerIcon
          animate-spin
          m-auto
        />
      </template>
      <template #error>
        <AvatarIcon />
      </template>
    </UseImage>
    <AvatarIcon v-else />
    <slot />
  </div>
</template>
<script setup lang="ts">
import { UseImage } from '@vueuse/components'
defineProps({
  avatarUrl: {
    type: String,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.user-avatar {
  display: flex;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 100%;
  overflow: hidden;
}
</style>
