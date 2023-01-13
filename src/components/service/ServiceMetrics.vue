<template>
  <ul class="metrics-list">
    <li v-if="!configured">
      <span class="ping-marker disabled" />
      <span class="metric-item"> Not configured with runtime yet</span>
    </li>
    <template v-else>
      <li v-if="metrics.latency">
        <span class="ping-marker" />
        <span class="metric-item">
          <b>{{ usePrecision(metrics.latency, 2) }}ms</b> latency
        </span>
      </li>
      <li v-if="metrics.uptime">
        <span class="ping-marker" />
        <span class="metric-item">
          <b>{{ usePrecision(metrics.uptime * 100, 2) }}%</b> uptime
        </span>
      </li>
      <li v-if="metrics.requests">
        <span class="ping-marker" />
        <span class="metric-item">
          <b>{{
            Intl.NumberFormat('en', { notation: 'compact' }).format(
              metrics.requests
            )
          }}</b>
          requests - <b>{{ usePrecision(metrics.errors * 100, 2) }}%</b> errors
        </span>
      </li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import { Service } from '@/api/response/'
import { PropType } from 'vue'
defineProps({
  metrics: {
    type: Object as PropType<Service['metrics']>,
    default: () => ({}),
  },
  configured: {
    type: Boolean,
    required: true,
  },
})
</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';

.metrics-list {
  white-space: nowrap;
  > li {
    height: 20px;
    display: flex;
    align-items: center;
  }
  .metric-item {
    font-weight: 600;
    font-size: $font-xs-size;
    line-height: 16px;
    color: #707888;
    b {
      color: $black-400;
    }
  }
}
.ping-marker {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: $green-400;
  margin-right: 8px;
  &.disabled {
    background: $grey-400;
  }
}
</style>
