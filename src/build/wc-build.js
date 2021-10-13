
import Vue from "vue";
import wrap from "@vue/web-component-wrapper";

import Tooltip from "../components/tooltip.vue";

const TooltipWC = wrap(Vue, Tooltip);

window.customElements.define("upc-tooltip", TooltipWC);