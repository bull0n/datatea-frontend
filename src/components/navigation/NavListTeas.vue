<template>
  <ul class="nav nav-pills flex-column list-teas">
    <nav-tea-element v-for="tea in teasByStatus.available" :key="tea.id" :tea="tea">
    </nav-tea-element>
  </ul>
</template>

<script lang="ts">
import NavTeaElement from '@/components/navigation/NavTeaElement.vue';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const teas = namespace('teas');

@Component({
  components: {
    NavTeaElement,
  },
})
export default class NavListTeas extends Vue {
  @teas.State
  teasByStatus;

  @teas.Action
  fetchTeasByStatus;

  mounted() {
    this.fetchTeasByStatus('AVAILABLE');
  }
}
</script>

<style scoped lang="scss">
.list-teas {
  background-color: rgb(241, 241, 241);
  border-radius: 0.3rem
}
</style>
