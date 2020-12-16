<template>
  <div id="app" v-if="!isLoading">
    <nav-main></nav-main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <nav-list-teas></nav-list-teas>
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

import NavListTeas from '@/components/navigation/NavListTeas.vue';
import NavMain from '@/components/navigation/NavMain.vue';

@Component({
  computed: {
    ...mapState('teas', ['isLoading']),
  },
  components: {
    NavListTeas,
    NavMain,
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
