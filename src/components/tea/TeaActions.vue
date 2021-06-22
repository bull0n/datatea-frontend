<template>
  <span>
    <button
      v-if="tea.status !== 'F' && tea.status !== undefined"
      type="button"
      class="btn btn-success"
      v-on:click="updateTeaStatus()"
    >
      {{ getIconForFutureStatus() }}
    </button>
  </span>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Tea from '@/data-model/tea/tea';

const teas = namespace('teas');

@Component
export default class TeaActions extends Vue {
  @Prop() readonly tea: Tea;

  @teas.State
  teasByStatus;

  updateTeaStatus(): void {
    console.log(this);
  }

  getIconForFutureStatus(): string {
    switch (this.tea.status) {
      case 'O':
        return '🚚';
      case 'A':
        return '🏁';
      default:
        return 'error';
    }
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
