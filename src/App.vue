<template>
  <div id="app" v-if="!isLoading">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <br>
      <router-link :to="{ name: 'teaAdd' }">Add new tea</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState('teas', ['isLoading']),
  },
})
export default class App extends Vue {
  async created() {
    this.$store.dispatch('teas/fetchTeas');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
