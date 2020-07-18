<template>
  <div>
    <div>
      <p v-for="(tea, index) in teas" :key="index">ListTeas Works {{ tea.name }} !</p>
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
