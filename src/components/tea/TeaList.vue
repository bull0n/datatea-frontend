<template>
  <div class="teas-container">
    <tea-list-element
      v-for="tea in teas"
      :key="tea.id"
      :tea="tea"
      :status="status"
    ></tea-list-element>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Tea from '@/data-model/tea/tea';
import TeaListElement from '@/components/tea/TeaListElement.vue';

const teas = namespace('teas');

@Component({
  components: {
    TeaListElement,
  },
})
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

  mounted(): void {
    this.fetchTeas();
  }

  @Watch('status')
  onPropertyChanged(): void {
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
.teas-container {
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-gap: 20px;
  padding-right: 50px;
}
</style>
