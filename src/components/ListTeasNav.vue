<template>
  <div>
      <p v-for="(tea, index) in teas" :key="index">ListTeasNav Works {{ tea.name }} !</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
  apollo: {
    teas: gql`query teas {
      teas {
        name
      }
    }`,
  },
})
export default class ListTeasNav extends Vue {
  teas: any;
}
</script>

<style scoped lang="scss">

</style>
