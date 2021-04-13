<template>
  <div>
    <h2 class="display-4">Add a new tea</h2>
    <form @submit.prevent="confirm()">
      <div class="row">
        <div class="col-md">
          <label class="form-label required">
            Tea name: *
            <input
              type="text"
              class="form-control tea-name"
              placeholder="Name"
              v-model="tea.name"
              required>
          </label>
        </div>
        <div class="col-md">
          <label class="form-label">
            Vendor:
            <input type="text" class="form-control" placeholder="Vendor" v-model="tea.vendor">
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <label class="form-label">
            URL bought:
            <input type="url" class="form-control" placeholder="URL" v-model="tea.urlBought">
          </label>
        </div>

        <div class="col-md">
          <label class="form-label">
            Category: *
            <select class="form-select" v-model="tea.category" required>
              <option selected="selected">Select a category...</option>
              <option value="WHITE">White</option>
              <option value="GREEN">Green</option>
              <option value="YELLOW">Yellow</option>
              <option value="OOLONG">Oolong</option>
              <option value="BLACK">Black</option>
              <option value="FERMENTED">Fermented</option>
            </select>
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <label class="form-label">
            Origin:
            <input type="text" class="form-control" placeholder="Origin" v-model="tea.origin">
          </label>
        </div>

        <div class="form-check col-md buy-again">
          <label class="form-check-label" >
            Would buy again ?
            <input class="form-check-input" type="checkbox" v-model="tea.wouldBuyAgain">
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <label class="form-label">
            Picking Season:
            <input type="date" class="form-control" v-model="tea.pickingSeason">
          </label>
        </div>

        <div class="col-md">
          <label class="form-label">
            Price:
            <input
              type="number"
              class="form-control"
              v-model="tea.price"
              step="0.01" min="0"
            >
          </label>
        </div>
      </div>

      <div class="row">
        <div>
          <label class="form-label">
            Comment:
            <textarea
              class="form-control"
              placeholder="Comment"
              v-model="tea.comment">
            </textarea>
          </label>
        </div>
        <div class="col-md">
          <label class="form-label">
            Vendor description:
            <textarea
              class="form-control"
              placeholder="Vendor description"
              v-model="tea.vendorDescription">
            </textarea>
          </label>
        </div>
      </div>

      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Tea from '@/data-model/tea/tea';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const teas = namespace('teas');

@Component
export default class TeaAdd extends Vue {
  tea = new Tea();

  @teas.Action('addTea')
  addTea;

  async confirm(): Promise<void> {
    this.tea = await this.addTea(this.tea);

    this.$router.push({
      name: 'tea',
      params: {
        teaId: this.tea.id,
      },
    });

    return Promise.resolve();
  }
}
</script>

<style scoped lang="scss">
.buy-again {
  margin-top:auto;
  margin-bottom: auto;

  label {
    padding-left: 1rem; 
    input {
      margin-left: 0;
    }
  }

}
</style>
