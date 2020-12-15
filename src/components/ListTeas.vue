<template>
  <ul class="nav nav-pills nav-fill flex-column list-teas">
    <li class="nav-item" v-for="tea in teas" :key="tea.id">
      <router-link
      class="nav-link"
      :class="{ active: isActive }"
      :to="{ name: 'tea', params: { teaId: tea.id } }">
        {{ tea.id }} - {{ tea.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState('teas', ['teas']),
    isActive: Boolean,
  },
})
export default class ListTeas extends Vue {
}
</script>

<style scoped lang="scss">
.list-teas {
  background-color: rgb(241, 241, 241);
  border-radius: 0.3rem
}
</style>
