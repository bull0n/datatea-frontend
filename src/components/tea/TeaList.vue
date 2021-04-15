<template>
  <div class="card">
    <ul>
      <li v-for="tea in teas" :key="tea.id">
        {{ tea.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Tea from '@/data-model/tea/tea';

const teas = namespace('teas');

@Component
export default class TeaList extends Vue {
  @Prop() readonly status: string;

  @teas.State
  teasByStatus;

  @teas.State
  allTeas;

  @teas.Action
  fetchTeasByStatus;

  @teas.Action
  fetchAllTeas;

  mounted() {
    this.fetchTeas();
  }

  @Watch('status')
  onPropertyChanged() {
    this.fetchTeas();
  }

  fetchTeas(): void {
    if (this.status !== undefined) {
      this.fetchTeasByStatus(this.status.toUpperCase());
    } else {
      this.fetchAllTeas();
    }
  }

  get teas(): Tea[] {
    if (this.status !== undefined) {
      return this.teasByStatus[this.status];
    }

    return this.allTeas;
  }
}
</script>

<style scoped lang="scss">

</style>
