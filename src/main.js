import Vue from 'vue'

import '../node_modules/mint-ui/lib/style.css'
import './lib/mui/css/mui.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);



import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})