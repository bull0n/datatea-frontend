<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-md-6 form-container border rounded p-4">
        <h3 class="display-6">Login</h3>
        <form @submit.prevent="submit()">
          <div class="mb-3">
            <label class="form-label">
              Email address
              <input
                type="text"
                class="form-control"
                placeholder="name@example.com"
                v-model="login.username"
              >
            </label>
          </div>
          <div class="mb-3">
            <label class="form-label">
              Password
              <input type="password" class="form-control" v-model="login.password">
            </label>
          </div>
          <button type="submit" class="btn btn-primary d-block w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserLogin from '@/data-model/users/user-login-form-data';
import client from '@/graphql/graphql_client';
import { LOGIN } from '@/graphql/queries/users';
import LoggedinUser from '@/data-model/users/logged-in-user';
import { namespace } from 'vuex-class';
import Cookies from 'js-cookie';

const users = namespace('users');
const teas = namespace('teas');

@Component
export default class LoginForm extends Vue {
  login: UserLogin = new UserLogin();

  @users.Action
  setLoggedInUser;

  @teas.Action
  fetchTeas;

  submit(): void {
    client.request(LOGIN, this.login)
      .then((r) => this.createUserLoggedIn(r.tokenAuth))
      .catch((e) => console.log(e));
  }

  createUserLoggedIn(r: any): void {
    const user = new LoggedinUser();
    user.username = r.payload.username;
    user.token = r.token;

    client.setHeader('authorization', `JWT ${user.token}`);
    this.setLoggedInUser(user);
    this.fetchTeas();
    this.putTokenInCookes(user.token);
  }

  putTokenInCookes(token: string) {
    Cookies.set('access_token', token);
  }
}
</script>

<style scoped lang="scss">
  .form-label {
    display: inline;
  }
</style>
