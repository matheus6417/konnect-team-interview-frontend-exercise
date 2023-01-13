<template>
  <div class="layout">
    <TopBar class="header" />
    <main class="p-10 container">
      <RouterView />
    </main>
  </div>
</template>
<style scoped lang="scss">
.layout {
  height: 100vh;
  display: grid;
  grid: auto 1fr / 1fr;
  .header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
}
</style>
