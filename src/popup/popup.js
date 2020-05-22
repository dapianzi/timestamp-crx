import Vue from 'vue'

import { Card,Form,Checkbox,Input,FormModel,DatePicker/* ,Divider */ } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import 'ant-design-vue/lib/base/style/css'
import 'ant-design-vue/lib/card/style/css'
import 'ant-design-vue/lib/checkbox/style/css'
import 'ant-design-vue/lib/form/style/css'
import 'ant-design-vue/lib/form-model/style/css'
import 'ant-design-vue/lib/input/style/css'
import 'ant-design-vue/lib/date-picker/style/css'
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormModel);
Vue.use(DatePicker);
// Vue.use(Divider);

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  
  render: h => h(App)
})
