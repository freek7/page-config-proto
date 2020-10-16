<template>
  <div class="footer-content">
    <div
      class="footer-column content-center partners-icons upc-w-100 hide-tablet"
    >
      <span title="Visa">
        <Visa />
      </span>
      <span title="mastercard">
        <Mastercard />
      </span>
      <span title="visa verified">
        <VisaVerifided />
      </span>
      <span title="mastercard securecode">
        <MastercardSecurecode />
      </span>
      <span title="PCI">
        <PciIcon />
      </span>
    </div>
    <div class="foooter-column">
      <Ecommerce />
    </div>
    <div class="footer-column partners-icons hide-mobile">
      <span title="Visa">
        <Visa />
      </span>
      <span title="mastercard">
        <Mastercard />
      </span>
      <span title="visa verified">
        <VisaVerifided />
      </span>
      <span title="mastercard securecode">
        <MastercardSecurecode />
      </span>
      <span title="PCI">
        <PciIcon />
      </span>
    </div>
    <div class="footer-column">
      <div class="contact-links">
        <p v-if="phone">
          <a :href="`callto:${phone.trim()}`">{{ phone }}</a>
        </p>
        <p v-if="email">
          <a :href="`mailto:${phone.trim()}`">{{ email }}</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import PciIcon from "@/components/icons/footer/pci";
import MastercardSecurecode from "@/components/icons/footer/mastercard_securecode.vue";
import VisaVerifided from "@/components/icons/footer/visa_verified.vue";
import Mastercard from "@/components/icons/footer/mastercard.vue";
import Visa from "@/components/icons/footer/visa.vue";
import Ecommerce from "@/components/icons/footer/ecommerce.vue";

export default {
  name: "UpcFooterPage",
  props: ["email", "phone"],
  components: {
    PciIcon,
    MastercardSecurecode,
    VisaVerifided,
    Mastercard,
    Visa,
    Ecommerce,
  },
};
</script>

<style lang="scss" scoped>
.contact-links {
  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #7a7d86;
  }
}
.footer {
  &-column {
    padding: 10px;
    &.partners-icons {
      display: flex;
      span {
        padding: 10px;
      }
    }
  }
  &-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 35px;
    align-items: center;
    min-height: 70px;
    background-color: #f9fbfd;
  }
}
.hide-mobile {
  @media (max-width: 690px) {
    display: none !important;
  }
}
.hide-tablet {
  @media (min-width: 691px) {
    display: none !important;
  }
}
</style>