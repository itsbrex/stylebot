import Vue from 'vue';
import store from './store/index';
import TheStylebotApp from './components/TheStylebotApp.vue';

import './index.scss';

import {
  IconsPlugin,
  TooltipPlugin,
  LayoutPlugin,
  DropdownPlugin,
  FormRadioPlugin,
  FormInputPlugin,
  InputGroupPlugin,
  ButtonPlugin,
  ButtonGroupPlugin,
  FormGroupPlugin,
  FormCheckboxPlugin,
  ListGroupPlugin,
  TableSimplePlugin,
} from 'bootstrap-vue';

Vue.use(IconsPlugin);
Vue.use(TooltipPlugin);
Vue.use(LayoutPlugin);
Vue.use(DropdownPlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormInputPlugin);
Vue.use(InputGroupPlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(ListGroupPlugin);
Vue.use(TableSimplePlugin);

const stylebotAppHost = document.createElement('div');
stylebotAppHost.id = 'stylebot';
document.body.appendChild(stylebotAppHost);

const shadowRoot = stylebotAppHost.attachShadow({ mode: 'open' });
const stylebotApp = document.createElement('div');

stylebotApp.id = 'stylebot-app';
shadowRoot.appendChild(stylebotApp);

new Vue({
  store,
  el: stylebotApp,
  render: h => h(TheStylebotApp),
});