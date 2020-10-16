<template>
  <div :style="{ background, maxWidth }" class="upc-panel-bar">
    <ul class="upc-bar-list">
      <li class="upc-bar-list-item">
        <p class="list-text list-title">Брендирование</p>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Загрузить лого</p>
        <label class="file-input">
          <span class="text">Обзор...</span>
          <input
            ref="image"
            @change="onImageChange"
            type="file"
            accept="image/*"
          />
        </label>
      </li>
      <li v-if="!!logo" class="upc-bar-list-item">
        <image-preview @delete="ClearImage" :imgSrc="logo" />
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Цвет хедера</p>
        <div>
          <upc-color-picker v-model="value.header_color" />
        </div>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Цвет кнопок</p>
        <div>
          <upc-color-picker v-model="value.button_color" />
        </div>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Цвет шрифта</p>
        <div>
          <upc-color-picker v-model="value.font_color" />
        </div>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Шрифт</p>
        <div class="control-wrapper">
          <label class="form-control">
            <select v-model="value.font_name">
              <option
                v-for="(font, index) in fonts"
                :key="`font_${index}`"
                :value="font.name"
              >
                {{ font.name }}
              </option>
            </select>
          </label>
        </div>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Телефон</p>
         <div class="control-wrapper">
          <label class="form-control">
            <input type="text" v-model="value.phone_number">
          </label>
         </div>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Email</p>
        <div class="control-wrapper">
          <label class="form-control">
            <input type="text" v-model="value.email">
          </label>
         </div>
      </li>
      <li class="upc-bar-list-item">
        <p class="list-text">Язык</p>
          <div class="control-wrapper">
          <label class="form-control">
            <select v-model="value.language">
              <option
                v-for="(font, index) in langsOtions"
                :key="`font_${index}`"
                :value="font.code"
              >
                {{ font.name }}
              </option>
            </select>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// components
import ImagePreview from "@/components/forms/image-preview";
import UpcColorPicker from "@/components/forms/color-picker.vue";

// utils
import { renderFile } from "@/utils/index";

// data, options
import fonts from "@/utils/data/fonts.json";
import langsOtions from '@/utils/data/langs-options.json'

export default {
  name: "UpcPanelBar",
  components: {
    "image-preview": ImagePreview,
    "upc-color-picker": UpcColorPicker,
  },
  props: {
    value: {
      type: Object,
    },
    background: {
      type: String,
      default: "#e2e7eb",
    },
    maxWidth: {
      type: String,
      default: "320px",
    },
  },
  data() {
    return {
      fonts,
      langsOtions,
      logo: "",
    };
  },
  methods: {
    async onImageChange($event) {
      const input = $event.target;
      const file = input.files[0];

      if (file && file.type.match("image.*")) {
        this.logo = await renderFile($event.target);
      } else {
        this.ClearImage();
      }
    },
    ClearImage() {
      this.logo = null;
      this.$refs["image"].value = "";
    },
  },
  created() {
    if(this.value && this.value.logo){
      this.logo = this.value.logo
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.$emit("input", newVal);
      },
    },
    logo: {
      immediate: true,
      handler(newVal) {
        this.$emit("input", {...this.value, ...{logo: newVal}})
      },
    }
  },
};
</script>
<style lang="scss" scoped>
.upc {
  &-bar-list-item {
    border: 1px solid #c6cfd7;
    height: 70px;
    padding: 20px 10px 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease-in-out;
    &:hover {
      background: #d6dee5;
    }
    .list-text {
      padding-right: 10px;
      font-size: 14px;
      &.list-title{
         font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.78;
        letter-spacing: normal;
        // color: #212225;
      }
    }
  }
}
.control-wrapper {
  width: 200px;
  max-width: 100%;
}
</style>