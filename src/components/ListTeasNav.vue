<template>
  <div>
      <p v-for="(tea, index) in teas" :key="index">ListTeasNav Works {{ tea.name }} !</p>
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
export default class ListTeasNav extends Vue {
  created() {
    this.$store.dispatch('teas/fetchTeas');
  }
}
</script>

<style scoped lang="scss">

</style>
