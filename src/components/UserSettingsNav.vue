<template>
  <div id="app">
    <div class="us__nav">
      <router-link to="/settings/emails">emails</router-link>
      <br>
      <router-link to="/settings/profile">profile</router-link>
    </div>
  </div>
</template>

<style scoped>
  .us__nav {
    grid-area: nav;
    border: 5px dotted;
    margin-right: .75rem;
    padding: .3rem;
  }
</style>