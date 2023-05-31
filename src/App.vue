<script>
  import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppHeader
    }
  }
</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <router-view/>
  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
