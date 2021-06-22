<template>
  <span>
    <button
      v-if="tea.status !== 'F' && tea.status !== undefined"
      type="button"
      class="btn btn-success"
      v-on:click="onUpdateTeaStatusClicked()"
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
import Status from '@/data-model/tea/status';
import { $enum } from 'ts-enum-util';

const teas = namespace('teas');

@Component
export default class TeaActions extends Vue {
  @Prop() readonly tea: Tea;

  @teas.State
  teasByStatus;

  @teas.Action
  updateTeaStatus;

  onUpdateTeaStatusClicked(): void {
    let newStatus: Status;
    switch (this.tea.status) {
      case Status.ORDERED:
        newStatus = Status.AVAILABLE;
        break;
      case Status.AVAILABLE:
        newStatus = Status.FINISHED;
        break;
      default:
        newStatus = Status.ORDERED;
        break;
    }
    this.updateTeaStatus({ tea: this.tea, newStatus: $enum(Status).getKeyOrThrow(newStatus) });
  }

  getIconForFutureStatus(): string {
    switch (this.tea.status) {
      case Status.ORDERED:
        return '🚚';
      case Status.AVAILABLE:
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
