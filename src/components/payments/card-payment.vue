<template>
  <form @submit.prevent="submitPayment">
    <div class="content-center">
      <upc-credit-card ref="ref_creditCard"/>
    </div>
    <div class="content-center">
      <button

          :style="{ background: config.button_color }"
          class="upc-button upc-mb-4 upc-mt-4 upc-w-100"
      >
        {{ i18n.$t.pay }} {{ priceText }}
      </button>
    </div>
  </form>
</template>

<script>
import CreditCard from "@/components/forms/credit-card.component.vue";
// mixins
import {PageConfigMixin} from "@/mixins/page-config.mixin.js";

export default {
  name: "CardPayment",
  components: {"upc-credit-card": CreditCard,},
  mixins: [PageConfigMixin],
  inject: ['i18n'],
  priceText: {
    type: String,
    default: ""
  },
  methods: {
    submitPayment() {
      if (this.$refs.ref_creditCard) {
        const valid = this.$refs.ref_creditCard.validate();
        console.log({valid});
      }
    },
  },
};
</script>
