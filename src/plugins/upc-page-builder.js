import UpcPaymentPage from '@/components/upc-payment-page.vue';

export default {
	install(Vue) {
		require('@/assets/styles.scss');
		Vue.component('upc-payment-page', UpcPaymentPage);
	}
};
