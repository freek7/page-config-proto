<template>
  <div class="upc-color-picker">
    <span class="color-label"> HEX </span>
    <div class="color-wrap">
      <label class="form-control">
        <input @focus="showPicker = true" v-model="color.hex" type="text" />
      </label>
    </div>
    <div v-if="showPicker" class="color-picker-wrapper">
      <chrome-picker v-model="color" />
      <div @click="showPicker = false" class="close-picker"></div>
    </div>
    <div @click="showPicker = true" class="color-indicator">
      <svg height="28" width="28">
        <circle
          cx="14"
          cy="14"
          r="12"
          stroke="#fff"
          stroke-width="2"
          :fill="value"
        />
      </svg>
    </div>
  </div>
</template>
<script>
// componets
import { Chrome } from "vue-color";

export default {
  name: "upc-color-picker",
  props: {
    value: {
      type: String,
    },
  },
  components: {
    "chrome-picker": Chrome,
  },
  data() {
    return {
      color: {
        hex: ''
      },
      showPicker: false,
    };
  },
  computed: {
    colorHex() {
      console.log(this.color);
      if(this.color.hex) return this.color.hex;
      return '';
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.color.hex =newVal;
        } else {
           this.color.hex = "";
        }
      },
    },
    color:{
      immediate: true,
      deep: true,
      handler(newVal) {
        const isObj = typeof newVal === 'object';
        if(newVal){
          const hexColor = isObj ? newVal.hex : newVal;
           this.$emit('input', hexColor.replace(/ /g, ''))
        }else{
           this.$emit('input', '')
        }
       
      }
    },
  },
};
</script>

<style lang="scss" >
.upc-color-picker {
  display: flex;
  align-items: center;
  position: relative;
  .color-indicator {
    width: 28px;
    height: 28px;
    margin-left: 15px;
  }
  .color-label {
    padding: 0px 5px;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #868a94;
  }
  .color-picker-wrapper {
    position: absolute;
    z-index: 20;
    top: 100%;
    right: 0;
  //  left: 50%;
  //  transform: translateX(-50%);
  }
  .close-picker {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: -1;
  }
}
.color-wrap {
  max-width: 82px;
}
</style>