<template>
  <div :style="{width, height}" class="close"></div>
</template>
<style lang="scss" scoped>
.close {
  position: relative;
  opacity: 0.3;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 50%;
  content: " ";
  height: 95%;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
<script>
export default {
  name: 'CloseIcon',
  props: {
    width: {
      type: String,
      default: '14px'
    },
    height: {
      type: String,
      default: '14px'
    }
  }
}
</script>