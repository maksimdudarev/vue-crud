<template>
  <div id="app">
    <div class="us__nav">
      <router-link to="/helloworld" tag="button">HelloWorld</router-link>
      <hr>
      <router-link to="/travellers" tag="button">Travellers</router-link>
      <hr>
      <router-link to="/games" tag="button">Games</router-link>
      <hr>
      <router-link to="/emails" tag="button">Emails</router-link>
      <hr>
      <router-link to="/profile" tag="button">Profile</router-link>
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