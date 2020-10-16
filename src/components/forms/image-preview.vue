<template>
  <div class="upc-image-preview">
    <div class="upc-image-preview__image">
      <img :src="imgSrc" alt="" />
    </div>
    <div @click="onDelete" class="upc-image-preview__close"><close-icon /></div>
  </div>
</template>

<script>
import CloseIcon from "@/components/icons/close-icon";

export default {
  name: "ImagePreview",
  components: {
      "close-icon": CloseIcon,
  },
  props: {
    imgSrc: {
      type: String,
    },
  },
  methods: {
    onDelete() {
      this.$emit("delete");
    },
  },
};
</script>

<style lang="scss" scoped>
.upc {
  &-image-preview {
    border-radius: 30px;
    padding: 10px 20px;
    background-color: #c2cad0;
    position: relative;
    padding-right: 50px;
    display: flex;
    align-items: center;
    &__image {
      max-height: 35px;
    }
    &__close {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      max-height: 24px;
      max-width: 100%;
      height: 24px;
    }
  }
}
</style>