<template>
  <div id="app" v-if="!isLoading">
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

const teas = namespace('teas');
const users = namespace('users');

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
  @teas.Action
  fetchTeas;

  @users.Getter
  isUserLoggedIn;

  created(): void {
    const token = Cookies.get('auth_token');

    if (this.isUserLoggedIn) {
      this.fetchTeas();
    } else if (token !== undefined) {
      this.retrieveUserFromToken(token);
    }
  }

  retrieveUserFromToken(token: any) {
    console.log(this);
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
label.required:after {
  content: "*";
}
</style>
