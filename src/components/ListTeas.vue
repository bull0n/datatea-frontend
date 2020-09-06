<template>
  <div>
    <div v-for="tea in teas" :key="tea.id">
      <router-link :to="{ name: 'tea', params: { teaId: tea.id } }">
        {{ tea.id }} - {{ tea.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState('teas', ['teas']),
  },
})
export default class ListTeas extends Vue {
}
</script>

<style scoped lang="scss">

</style>
