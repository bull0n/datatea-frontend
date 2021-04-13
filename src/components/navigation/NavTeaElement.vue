<template>
  <li class="nav-item">
    <router-link
    class="nav-link"
    :class="{ active: isActive }"
    :to="{ name: 'tea', params: { teaId: tea.id }}">
      <tea-category-color-label :teaCategory="tea.category"></tea-category-color-label>
      {{ tea.id }} - {{ tea.name }}
    </router-link>
  </li>
</template>

<script lang="ts">
import Tea from '@/data-model/tea/tea';
import TeaCategoryColorLabel from '@/components/navigation/TeaCategoryColorLabel.vue';
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component({
  components: {
    TeaCategoryColorLabel,
  },
})
export default class NavTeaElement extends Vue {
  @Prop({ required: true }) readonly tea: Tea

  get isActive(): boolean {
    return this.$route.params.teaId === this.tea.id;
  }
}
</script>

<style scoped lang="scss">

</style>
