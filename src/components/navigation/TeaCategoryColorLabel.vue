<template>
  <span>{{ getCategoryColorDot() }}</span>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class TeaCategoryColorLabel extends Vue {
  @Prop({ required: true }) readonly teaCategory: string;

  getCategoryColorDot(): string {
    switch (this.teaCategory) {
      case 'OOLONG':
        return '🔵';
      case 'GREEN':
        return '🟢';
      case 'BLACK':
        return '⚫';
      case 'WHITE':
        return '⚪';
      case 'FERMENTED':
        return '🟤';
      case 'YELLOW':
        return '🟡';
      default:
        return '☕';
    }
  }
}
</script>

<style scoped lang="scss">

</style>
