<template>
  <div class="card">
    <div class="card-body" v-if="tea !== undefined">
      <h1 class="display-4">
        {{ tea.name }}
        <small class="fs-5 text-muted">
          {{ tea.categoryLabel }}
          <template v-if="tea.price !== null">{{ tea.price }} $/g</template>
        </small>
      </h1>
      <dl class="row">
        <dt class="col-sm-3">Vendor</dt>
        <dd class="col-sm-9">
          <p>{{ tea.vendor }}</p>
        </dd>

        <dt class="col-sm-3">Description</dt>
        <dd class="col-sm-9">
          <p>{{ tea.vendorDescription }}</p>
          <p v-if="tea.urlBought != ''">
            Vendor link: <a :href="tea.urlBought"></a>
          </p>
        </dd>

        <dt class="col-sm-3">Origin</dt>
        <dd class="col-sm-3">{{ tea.origin }}</dd>

        <dt class="col-sm-3">Picking season</dt>
        <dd class="col-sm-3">{{ tea.pickingSeason }}</dd>

        <dt class="col-sm-3">Comment</dt>
        <dd class="col-sm-9">{{ tea.comment }}</dd>
      </dl>
    </div>
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
export default class TeaDetail extends Vue {
  @Prop({ required: true }) readonly teaId: number;

  tea = new Tea();

  @teas.Action
  fetchTea;

  mounted() {
    this.onTeaIdChanged();
  }

  @Watch('teaId')
  async onTeaIdChanged(): Promise<void> {
    this.tea = await this.fetchTea(this.teaId);
  }
}
</script>

<style scoped lang="scss">

</style>
