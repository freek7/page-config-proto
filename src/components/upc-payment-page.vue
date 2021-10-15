<template>
  <div class="UpcPaymentPage" :style="{ color: config.font_color }">
    <upc-base-layout :config="config">
      <div>
        <div class="order-info">
          <slot name="orderInfo">
            <!-- #region demo content -->
            <div class="order-info-demo">
              <h3 class="order-info-demo__merchant-name">{{ merchantName }}</h3>
              <small>{{ i18n.$t.orderID }} {{ orderIdText }}</small>
              <p>{{ description }}</p>
              <h3 class="order-info-demo__price">{{ priceText }}</h3>
            </div>
            <!-- #endregion -->
          </slot>
        </div>

        <div>
          <div class="slider">
            <upc-slider v-model="slideIndex" :slides="slides"/>
          </div>
          <div class="upc-mt-5">
            <template v-if="currenSlideName === 'creditCard'">
              <upc-card-payment
                  :priceText="priceText"
                  :config="config"
                  @submit-payment:credit-card="onSubmit"
              />
            </template>
            <template v-if="currenSlideName === 'masterPass'">
              <upc-massterpass-payment
                  :config="config"
                  @submit-payment:master-pass="onSubmit"
              />
            </template>
            <template v-if="currenSlideName === 'googlePay'">
              <div class="content-center">
                <h3>to do googlePay</h3>
              </div>
            </template>
            <template v-if="currenSlideName === 'applePay'">
              <div class="content-center">
                <h3>to do applePay</h3>
              </div>
            </template>
          </div>
        </div>
      </div>
    </upc-base-layout>
  </div>
</template>
<script>
// components
import UpcBaseLayout from "@/components/layouts/base-layout.vue"
import UpcSlider from "@/components/slider/index.vue";
import CardPayment from "@/components/payments/card-payment.vue";
import MasterpassPayment from "@/components/payments/masterpass-payment.vue";

// data, options
import fonts from "@/utils/data/fonts.json";
import {updateFont} from '@/utils/dom-manipulation/update-font.js'

// mixins
import {PageConfigMixin} from "@/mixins/page-config.mixin.js"


export default {
  name: "UpcPaymentPage",
  components: {
    'upc-base-layout': UpcBaseLayout,
    "upc-card-payment": CardPayment,
    "upc-massterpass-payment": MasterpassPayment,
    "upc-slider": UpcSlider,
  },
  inject: ['i18n'],
  mixins: [PageConfigMixin],

  props: {
    merchantName: {
      type: String,
      default: ""
    },
    orderIdText: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    priceText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      errors: {},
      slideIndex: 0,
    };
  },

  computed: {
    slides() {
      return [
        {
          icon: "card-icon",
          title: "Банковская карта",
          name: "creditCard"
        },
        {
          icon: "apple-pay-icon",
          title: "Apple Pay",
          name: "applePay"
        },
        {
          icon: "google-pay-icon",
          title: "Google Pay",
          name: "googlePay"
        },
        {
          icon: "masterpass-icon",
          title: "Masterpass",
          name: "masterPass"
        },
      ]
    },
    currenSlideName(){
      return this.slides[this.slideIndex] ? this.slides[this.slideIndex].name : ''
    },
    allowedSlides(){
      return this.slides
    }
  },

  methods: {
    setFont() {
      const font_name = this.config.font_name;
      const font = fonts.find((item) => item.name === font_name);
      updateFont(font_name, font.link);
    },
    onSubmit($event) {
      this.$emit('submit', $event);
    }
  },

  watch: {
    "config.font_name": {
      immediate: true,
      handler() {
        this.setFont();
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.UpcPaymentPage {
  height: 100%;

  .order-info {
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;

    &-demo {
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.7;

      &__price {
        font-size: 32px;
        line-height: 1.44;
      }

      &__merchant-name {
        font-size: 31px;
        font-weight: bold;
        line-height: 1.48;
      }
    }
  }
}
</style>
