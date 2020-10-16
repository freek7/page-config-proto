<template>
  <div class="UpcPaymentPage" :style="{ color: config.font_color }">
    <div class="wrapper">
      <div class="content">
        <div :style="{ background: config.header_color }" class="header">
          <img :src="config.logo" alt="" />
        </div>

        <div class="order-info">
          <slot name="orderInfo">
            <!-- #region demo content -->
            <div class="order-info-demo">
              <h3 class="order-info-demo__merchant-name">Comfy</h3>
              <small>Заказ № 6516-51-548</small>
              <p>Смартфон Samsung Galaxy Note 20 Ultra 8/256Gb Black</p>
              <h3 class="order-info-demo__price">35 999.00 грн</h3>
            </div>
            <!-- #endregion -->
          </slot>
        </div>

        <div >
          <div class="slider">
            <upc-slider v-model="slideIndex" />
          </div>
          <div class="upc-mt-5">
            <template v-if="slideIndex === 0">
            <!-- #region card -->
            <upc-card-payment :config="config"/>
           
            <!-- #endregion -->
          </template>
          <template v-else>
            <div class="content-center">
              <h3>to do</h3>
            </div>
          </template>
          </div>
        </div>
      </div>
      <div class="footer">
        <upc-footer-page :email="config.email" :phone="config.phone_number" />
      </div>
    </div>
  </div>
</template>
<script>
// components
import UpcFooterPage from "@/components/page/upc-footer.vue";
// import CreditCard from "@/components/forms/credit-card.component.vue";
import UpcSlider from "@/components/slider/index.vue";
import CardPayment from '@/components/payments/card-payment.vue'

// data, options
import fonts from "@/utils/data/fonts.json";

export default {
  name: "UpcPaymentPage",
  components: {
    "upc-footer-page": UpcFooterPage,
    // "upc-credit-card": CreditCard,
    'upc-card-payment': CardPayment,
    "upc-slider": UpcSlider,
  },
  props: {
    config: {
      type: Object,
    },
  },
  data() {
    return {
      errors: {},
      slideIndex: 0,
    };
  },
  methods: {
   setFont(){
     const styleEl = document.head.querySelector('style#upc-font');
     const font_name = this.config.font_name;
     const font = fonts.find(item=>item.name === font_name);

     
      if(styleEl){
         document.head.removeChild(styleEl)
      }
       const style = document.createElement('style');
       style.type = 'text/css';
       style.id = 'upc-font';
       document.head.append(style)
       const css  = `
        @import url(${font.link});
       body{font-family: '${font_name}', sans-serif;}`
       style.appendChild(document.createTextNode(css));
       
   }
  },
  mounted(){  
    this.setFont();
  },
  watch: {
    'config.font_name': {
      immediate: false, 
      handler(font){
        console.log({font})
        this.setFont();
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.UpcPaymentPage {
  height: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .content {
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 auto;
  }
  .header {
    height: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      height: 33px;
      max-width: 100%;
    }
  }
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