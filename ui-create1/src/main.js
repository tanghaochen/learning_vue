import {createApp} from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import myIcon from '@/components/common/my-icon';


const vue = createApp(App);
vue.component('my-icon', myIcon);
vue.use(router).use(store).mount('#app');