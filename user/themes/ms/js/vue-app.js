// IE polyfills
import 'core-js/stable';
//
import 'regenerator-runtime/runtime';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

//Components
import sideNav from "./components/sideNav";
import gallery from "./components/gallery";

const app = new Vue({
	el: '#app',
	data(){
		return {
			isScrolled: false,
		}
	},
	components: {
		sideNav,
		gallery
	},
});
