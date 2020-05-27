import Vue from 'vue'

import { Form,Select,Checkbox,Input,DatePicker,Divider } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
Vue.use(Form);
Vue.use(Select);
Vue.use(Checkbox);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Divider);

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  
  render: h => h(App)
})
