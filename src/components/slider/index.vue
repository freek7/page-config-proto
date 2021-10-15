<template>
  <div v-if="slides && slides.length" class="upc-slider">
    <div class="slider-button" @click="update(value - 1)">
      <div class="button-icon"></div>
    </div>
    <div ref="slides" class="slides">
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :class="{ active: slide.name === value }"
        @click="update(slide.name)"
        :key="slide.name"
      >
        <div class="slide-icon">
          <component :is="slide.icon"></component>
        </div>
        <p>{{ slide.title }}</p>
      </div>
    </div>
    <div class="slider-button" @click="update(value + 1)">
      <div class="button-icon next"></div>
    </div>
  </div>
</template>
<script>
import { animate } from "@/utils/index";

import SliderMasterpassIcon from "@/components/icons/slider/slider.masterpass.vue";
import SliderGooglePay from "@/components/icons/slider/slider.g-pay.vue";
import SliderCardIcon from "@/components/icons/slider/slider.card.vue";
import SliderAppleIcon from "@/components/icons/slider/slider.apple.vue";

export default {
  name: "UpcSlider",
  props: {
    value: {},
    slides: {
      type: Array,
      default: () => []
    }
  },
  components: {
    "masterpass-icon": SliderMasterpassIcon,
    "google-pay-icon": SliderGooglePay,
    "card-icon": SliderCardIcon,
    "apple-pay-icon": SliderAppleIcon,
  },


  methods: {
    update(index) {
      let newIndex = index;
      if (newIndex < 0) {
        newIndex = this.slides.length - 1;
      }
      if (this.slides.length - 1 < newIndex) {
        newIndex = 0;
      }
      this.$emit("input", newIndex);
    },
    scroll() {
      const slides = this.$refs.slides;
      const { scrollWidth, children, scrollLeft } = slides;
      const activeIndex = this.value;

      const scrollTO = (scrollWidth / children.length) * activeIndex;

      const needScroll = scrollTO - scrollLeft;

      animate({
        duration: 300,
        timing(timeFraction) {
          return Math.pow(timeFraction, 2);
        },
        draw(progress) {
          const scrollToProggres = scrollLeft + progress * needScroll;
          slides.scrollLeft = scrollToProggres < 0 ? 0 : scrollToProggres;
        },
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.scroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.scroll);
  },

  watch: {
    value: {
      immediate: true,
      handler() {
        if (this.$refs.slides) {
          this.scroll();
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.upc-slider {
  height: 76px;
  display: flex;
  background-color: #f9fbfd;
  justify-content: center;
  .slides {
    display: flex;
    overflow: hidden;
    transition: 10s;
  }
  .slider-button {
    cursor: pointer;
    padding: 15px;
    display: flex;
    align-items: center;
    .button-icon {
      transform-origin: 50%;
      width: 30px;
      height: 30px;
      transform: rotate(45deg);
      border-color: rgba(0, 0, 0, 0.4);
      border-left: 2px solid;
      border-bottom: 2px solid;
      &.next {
        transform: rotate(225deg);
      }
    }
  }
  .slide {
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid transparent;
    transition: 0.3s;
    justify-content: center;
    align-items: center;
    padding: 5px;
    min-width: 120px;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    cursor: pointer;
    &.active {
      border-bottom: 3px solid #2272ff;
      color: #2272ff;
    }
    &-icon {
      margin-bottom: 5px;
    }
  }
}
</style>
