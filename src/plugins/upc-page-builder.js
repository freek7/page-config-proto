import UpcPanelBar from '@/components/upc-panel-bar.vue';
import UpcPaymentPage from '@/components/upc-payment-page.vue';
// import VueTheMask from 'vue-the-mask';

export default {
	install(Vue) {
		require('@/assets/styles.scss');
		// Vue.use(VueTheMask);
		Vue.component('upc-panel-bar', UpcPanelBar);
		Vue.component('upc-payment-page', UpcPaymentPage);
	}
};
