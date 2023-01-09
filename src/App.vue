<template>
  <div class="layout">
    <TopBar class="header" />
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style lang="scss">
body {
  max-width: 1440px !important; // TODO: REMOVE
  margin-inline: auto !important;
}
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
