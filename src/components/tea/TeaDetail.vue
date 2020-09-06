<template>
  <div>
    <div>
      {{ tea.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tea from '../../data-model/tea';

@Component
export default class TeaDetail extends Vue {
  @Prop({ required: true }) readonly teaId: number;

  get tea(): Tea {
    return this.$store.getters['teas/getTeaById'](this.teaId);
  }
}
</script>

<style scoped lang="scss">

</style>
