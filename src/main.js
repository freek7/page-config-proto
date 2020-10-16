import Vue from 'vue';
import App from './App.vue';
import UpcPageBuilder from './plugins/upc-page-builder';

Vue.config.productionTip = false;
Vue.use(UpcPageBuilder, {});

new Vue({
	render: (h) => h(App)
}).$mount('#app');
