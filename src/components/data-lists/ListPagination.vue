
<template>
  <nav
    class="pagination"
    role="navigation"
  >
    <TheButton
      :disabled="isFirstPage || !data.length"

      :rounded="true"
      title="Previous page"
      variant="outline"
      @click="prev"
    >
      <ArrowIcon direction="left" />
    </TheButton>
    <span
      v-if="data.length"
      class="pagination-text"
    ><b>{{ currentIndexesText }}</b> of {{ data.length }} {{ dataName }} </span>
    <span
      v-else
      class="pagination-text"
    >No {{ dataName }} </span>
    <TheButton
      :disabled="isLastPage || !data.length"
      :rounded="true"
      title="Next page"
      variant="outline"
      @click="next"
    >
      <ArrowIcon direction="right" />
    </TheButton>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: unknown[]
  pageSize: number
  dataName: string
  currentPageItems: unknown[] | undefined
  currentPageNumber: number
}>()
const emit = defineEmits(['update:currentPageItems', 'update:currentPageNumber'])

const update = ({
  currentPage,
  currentPageSize,
}: {
  currentPage: number
  currentPageSize: number
}) => {
  const start = (currentPage - 1) * currentPageSize
  const end = start + currentPageSize
  emit('update:currentPageItems', props.data.slice(start, end))
  emit('update:currentPageNumber', currentPage)
}

watch(
  toRefs(props).data,
  () => {
    update({
      currentPage: props.currentPageNumber,
      currentPageSize: props.pageSize,
    })
  },
  {
    immediate: true,
  },
)
const totalComputed = computed(() => props.data.length)

const { currentPage, isFirstPage, isLastPage, prev, next } =
  useOffsetPagination({
    total: totalComputed,
    page: props.currentPageNumber,
    pageSize: props.pageSize,
    onPageChange: update,
    onPageSizeChange: update,
  })

const currentIndexesText = computed(() => {
  if (!props.currentPageItems) return ''
  const start = (currentPage.value - 1) * props.pageSize + 1
  const end = start + props.currentPageItems.length - 1
  return `${start} to ${end}`
})
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  &-text {
    margin-inline: 1rem;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: $black-300;
  }
  b {
    color: $black-400;
  }
}
</style>
