<template>
  <div id="app">
    <nav-main></nav-main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3" v-if="isUserLoggedIn">
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
import { namespace } from 'vuex-class';
import Cookies from 'js-cookie';

const users = namespace('users');

const teas = namespace('teas');

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
  @users.Getter
  isUserLoggedIn;

  @users.Action
  retrieveUserFromToken;

  @teas.Action
  fetchTeasByStatus;

  async mounted() {
    const token = Cookies.get('auth_token');
    if (token !== undefined && !this.isUserLoggedIn) {
      await this.getUserFromToken(token);
    }
  }

  async getUserFromToken(token: any) {
    await this.retrieveUserFromToken(token);
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

label {
  display: initial;
}

.row {
  margin-bottom: 1rem;
}
</style>
