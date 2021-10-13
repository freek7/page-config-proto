<template>
  <div class="wrapper">
    <div class="content">
      <div :style="{ background: config.header_color }" class="header">
        <img :src="config.logo" alt="" />
      </div>
      <slot></slot>
    </div>
    <div class="footer">
      <upc-footer-page :email="config.email" :phone="config.phone_number" />
    </div>
  </div>
</template>
<script>
import UpcFooterPage from "@/components/page/upc-footer.vue";

// mixins
import { PageConfigMixin } from "@/mixins/page-config.mixin.js";

export default {
  name: "UpcBaseLayout",
  components: {
    "upc-footer-page": UpcFooterPage,
  },
  mixins: [PageConfigMixin],
};
</script>
<style lang="scss" scoped>
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
</style>