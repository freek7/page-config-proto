<template>
  <div class="content-center">
    <form @submit.prevent="">
      <div class="upc-credit-card">
        <div>
          <div class="label-info">{{ i18n.$t.login }}</div>
          <label class="form-control">
            <input v-mask="'+### ## ### ####'"/>
          </label>
        </div>
        <div class="upc-pt-35">
          <div class="label-info">{{ i18n.$t.password }}</div>
          <label class="form-control">
            <input type="password"/>
          </label>
        </div>
      </div>
      <button
          :style="{ background: config.button_color }"
          class="upc-button upc-mb-4 upc-mt-4 upc-w-100"
      >
        {{ i18n.$t.enter }}
      </button>
    </form>
  </div>
</template>
<script>

import {mask} from 'vue-the-mask'
// mixins
import {PageConfigMixin} from "@/mixins/page-config.mixin.js";

export default {
  name: "MasterpassPayment",
  mixins: [PageConfigMixin],
  directives: {mask},
  inject: ['i18n']
};
</script>
