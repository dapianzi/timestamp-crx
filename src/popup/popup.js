import Vue from 'vue'

import { Card,Form,Checkbox,Input,FormModel,DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import 'ant-design-vue/lib/base/style'
// import 'ant-design-vue/lib/card/style'
// import 'ant-design-vue/lib/checkbox/style'
// import 'ant-design-vue/lib/form/style'
// import 'ant-design-vue/lib/form-model/style'
// import 'ant-design-vue/lib/input/style'
// import 'ant-design-vue/lib/date-picker/style'
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormModel);
Vue.use(DatePicker);


import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  
  render: h => h(App)
})
