<template>
  <ul class="nav nav-pills flex-column list-teas">
    <nav-tea-element v-for="tea in teas" :key="tea.id" :tea="tea">
    </nav-tea-element>
  </ul>
</template>

<script lang="ts">
import Tea from '@/data-model/tea';
import NavTeaElement from '@/components/navigation/NavTeaElement.vue';
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { namespace } from 'vuex-class';

const teas = namespace('teas');

@Component({
  computed: {
    ...mapState('teas', ['teas']),
  },
  components: {
    NavTeaElement,
  },
})
export default class NavListTeas extends Vue {
  @teas.State
  teas;
}
</script>

<style scoped lang="scss">
.list-teas {
  background-color: rgb(241, 241, 241);
  border-radius: 0.3rem
}
</style>
