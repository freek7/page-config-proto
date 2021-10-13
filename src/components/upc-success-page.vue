<template>
  <upc-base-layout>
    <div></div>
  </upc-base-layout>
</template>
<script>
// components
import UpcBaseLayout from "@/components/layouts/base-layout.vue"
// mixins
import { PageConfigMixin } from "@/mixins/page-config.mixin.js";

export default {
  name: "UpcSuccessPage",
  mixins: [PageConfigMixin],
  components: {
    'upc-base-layout': UpcBaseLayout,
  }
};
</script>