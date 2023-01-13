<template>
  <div class="service-versions">
    <div
      v-for="{ id, name, description, developer, updated_at } in versions"
      :key="id"
      class="version"
    >
      <div class="version-name">
        <b> v{{ name }} </b>
      </div>
      <div class="version-description">
        {{ description }}
      </div>
      <div class="version-types">
        <span
          v-for="type in serviceTypes"
          :key="type"
          class="type-flag"
          :class="{ 'type-flag--active': serviceType === type }"
        >{{ type }}</span>
      </div>
      <div
        v-if="developer"
        class="developer-info"
      >
        <div class="avatar-wrapper">
          <UserAvatar
            :avatar-url="developer.avatar"
            class="avatar"
          />
        </div>
        <div class="info">
          <span class="developer-name">
            {{ developer.name }}
          </span>
          <span class="updated-time">
            {{ formatTimeAgo(new Date(updated_at)) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Service } from '@/api/response'
import { PropType } from 'vue'
import { formatTimeAgo } from '@vueuse/core'
const serviceTypes = ['HTTP', 'REST']
defineProps({
  versions: {
    type: Array as PropType<Service['versions']>,
    required: true,
  },
  serviceType: {
    type: String as PropType<Service['type']>,
    required: true,
  },
})

</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';
.service-versions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.75rem 0;
}
.version {
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  padding: 0.25rem 0;
  flex-grow: 1;
  max-width: 765px;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  > * {
    flex-grow: 1;
  }
  &:not(:nth-child(1)) {
    border-top: 1px solid $green-100;
  }
  &-name {
    max-width: 65px;
    font-weight: 600;
    font-size: 13px;
    line-height: 24px;
    color: $black-600;
  }
  &-description {
    max-width: 36ch;
    font-weight: 400;
    font-size: $font-xs-size;
    line-height: 16px;
    color: $grey-700;
  }
  &-types {
    width: 90px;
    display: flex;
    gap: 4px;
    flex-grow: 0;
  }
}

.type-flag {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  height: min-content;
  font-size: $font-xxs-size;
  line-height: 20px;
  padding: 0 0.4rem;
  color: $blue-400;
  background: $blue-200;
  border-radius: 4px;
  opacity: 0.9;
  vertical-align: middle;
  &--active {
    background: $blue-200;
  }
}

.developer-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:4px;
  font-weight: 400;
  font-size: $font-xs-size;
  line-height: 16px;
  color: $grey-700;
  margin-left: auto;
  padding-inline: 0.75rem;
  .developer-name {
    font-weight: 600;
    width: 12ch;
    font-size: 13px;
    line-height: 24px;
    white-space: nowrap;
    color: $black-400;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .info {
    display: flex;
    flex-direction: column;
  }
  .avatar-wrapper {
    margin-top: 0;
    margin-bottom: auto;
    display: flex;
    align-items: flex-start;
    padding: 0.2rem;
    .avatar {
    width: 20px;
    height: 20px;
  }
  }

  .updated-time {
    font-weight: 400;
    font-size: $font-xs-size;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: $grey-700;
  }
}
</style>
