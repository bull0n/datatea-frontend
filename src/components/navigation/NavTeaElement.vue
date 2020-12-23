<template>
  <li class="nav-item">
    <router-link
    class="nav-link"
    :class="{ active: isActive }"
    :to="{ name: 'tea', params: { teaId: tea.id }}">
      {{ tea.id }} - {{ tea.name }}
    </router-link>
  </li>
</template>

<script lang="ts">
import Tea from '@/data-model/tea';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class NavTeaElement extends Vue {
  @Prop({ required: true }) readonly tea: Tea

  public isActive = false;

  @Watch('$route', { immediate: true, deep: true })
  onTeaRouteChanged(newRoute: Route) {
    this.isActive = newRoute.params.teaId === this.tea.id;
  }
}
</script>

<style scoped lang="scss">

</style>
