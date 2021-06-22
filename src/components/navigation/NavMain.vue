<template>
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
            <router-link :to="{ name: 'home' }" class="navbar-brand">Tea</router-link>
          </li>
          <li class="nav-item" v-if="isUserLoggedIn">
            <router-link
              :to="{ name: 'listTeas', params: { status: 'available' }}"
              class="navbar-brand"
            >Available teas </router-link>
          </li>
          <li class="nav-item" v-if="isUserLoggedIn">
            <router-link
              :to="{ name: 'listTeas', params: { status: 'ordered' }}"
              class="navbar-brand"
            >Teas on their way</router-link>
          </li>
          <li class="nav-item" v-if="isUserLoggedIn">
            <router-link
              :to="{ name: 'listTeas', params: { status: 'finished' }}"
              class="navbar-brand"
            >Archive</router-link>
          </li>
          <li class="nav-item" v-if="isUserLoggedIn">
            <router-link :to="{ name: 'listAllTeas' }" class="navbar-brand">All teas</router-link>
          </li>
          <li class="nav-item" v-if="isUserLoggedIn">
            <router-link :to="{ name: 'teaAdd' }" class="navbar-brand">Add a new tea</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'login' }"
              class="navbar-brand"
              v-if="!isUserLoggedIn"
            >
              Login
            </router-link>

            <a class="navbar-brand"
              href="#"
              v-on:click.prevent="onLogout()"
              v-else
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const users = namespace('users');

@Component
export default class NavMain extends Vue {
  @users.Getter
  isUserLoggedIn;

  @users.Action
  logout;

  onLogout(): void {
    this.logout();
    window.location.reload();
  }
}
</script>

<style scoped lang="scss">
</style>
