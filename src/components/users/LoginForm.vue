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
                type="email"
                class="form-control"
                placeholder="name@example.com"
                v-model="login.email"
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

@Component
export default class LoginForm extends Vue {
  login: UserLogin = new UserLogin();

  submit(): void {
    this.submit();
  }
}
</script>

<style scoped lang="scss">
  .form-label {
    display: inline;
  }
</style>
