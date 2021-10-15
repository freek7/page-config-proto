<template>
  <div class="content-center">
    <div>
      <div class="upc-master-pass">
        <div>
          <div class="label-info">{{ i18n.$t.login }}</div>
          <label class="form-control">
            <input v-model.trim="form.login" v-mask="'+### ## ### ####'"/>
          </label>
        </div>
        <div class="upc-pt-35">
          <div class="label-info">{{ i18n.$t.password }}</div>
          <label class="form-control">
            <input v-model.trim="form.password" type="password" maxlength="30"/>
          </label>
        </div>
      </div>
      <button
          @click="submit"
          :style="{ background: config.button_color }"
          class="upc-button upc-mb-4 upc-mt-4 upc-w-100"
      >
        {{ i18n.$t.enter }}
      </button>
    </div>
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
  inject: ['i18n'],
  data() {
    return {
      form: {
        password: "",
        login: ""
      }
    }
  },
  methods: {
    submit() {
      const {login, password} = this.form

      this.$emit('submit-payment:master-pass', {
        type: 'master-pass',
        data: {login: login.replace(/ /g, ''), password}
      });
    }
  }
};
</script>

<style scoped>
.upc-master-pass {
  min-width: 270px;
}
</style>
