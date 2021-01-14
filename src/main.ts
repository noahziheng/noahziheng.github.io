import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import messages from './lang';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArchive } from '@fortawesome/free-solid-svg-icons/faArchive';
import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faZhihu } from '@fortawesome/free-brands-svg-icons/faZhihu';
import { faWeibo } from '@fortawesome/free-brands-svg-icons/faWeibo';
/* tslint:disable:no-var-requires */
const fontawesome = require('@fortawesome/vue-fontawesome');

library.add(faArrowLeft, faArchive, faWeixin, faGithub, faZhihu, faWeibo);
Vue.component('font-awesome-icon', fontawesome.FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: navigator.language.includes('zh') ? 'zh' : 'en',
  fallbackLocale: 'en',
  messages,
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
