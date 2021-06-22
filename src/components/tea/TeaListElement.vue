<template>
  <div class="card">
    <div class="card-header">
      <tea-category-color-label :teaCategory="tea.category"></tea-category-color-label>
      {{ tea.name }}
    </div>
    <div class="card-body">
      <h6 class="fw-bold">Vendor Description</h6>
      <p>
        {{tea.vendorDescription}}
      </p>

      <h6 class="fw-bold">Comment</h6>
      <p>
        {{tea.comment}}
      </p>

      <div class="text-end">
        <router-link :to="{ name: 'tea', params: { teaId: tea.id }}" class="btn btn-primary me-1"
        >
          🔍
        </router-link>
        <tea-actions :tea="tea"></tea-actions>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Tea from '@/data-model/tea/tea';
import TeaCategoryColorLabel from '@/components/navigation/TeaCategoryColorLabel.vue';
import TeaActions from '@/components/tea/TeaActions.vue';
import Status from '@/data-model/tea/status';

const teas = namespace('teas');

@Component({
  components: {
    TeaCategoryColorLabel,
    TeaActions,
  },
})
export default class TeaListElement extends Vue {
  @Prop() readonly tea: Tea;

  @Prop() readonly status: Status;

  @teas.State
  teasByStatus;
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
