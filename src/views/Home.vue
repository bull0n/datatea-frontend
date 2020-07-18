<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <list-teas-nav></list-teas-nav>
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ListTeasNav from '@/components/ListTeasNav.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListTeasNav,
  },
};
</script>
