<template>
  <div id="app" v-if="!isLoading">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link :to="{ name: 'home' }" class="navbar-brand">🍵 DataTea</router-link>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="navbar-brand">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'teaAdd' }" class="navbar-brand">Add a new tea</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">
          <list-teas></list-teas>
        </div>
        <div class="col-sm">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

import ListTeas from '@/components/ListTeas.vue';

@Component({
  computed: {
    ...mapState('teas', ['isLoading']),
  },
  components: {
    ListTeas,
  },
})
export default class App extends Vue {
  async created() {
    this.$store.dispatch('teas/fetchTeas');
  }
}
</script>

<style lang="scss">
@import "bootstrap";

#app {
  nav {
    margin-bottom: 1rem;
  }
}
</style>
