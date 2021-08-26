require('./bootstrap');

import Vue from 'vue'
import Todos from './components/Todos'

const app = new Vue({
    el: '#app',
    components: { Todos }
});
