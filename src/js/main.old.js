import Vue from "vue";
import App from "./components/App.vue";
//import "./loader.js";
import router from "./routes.js";

import { Col, Row, Button, ButtonGroup, Carousel, CarouselItem } from "element-ui";
// var VueMaterial = require('vue-material');

Vue.use( Col );
Vue.use( Row );
Vue.use( Button );
Vue.use( ButtonGroup );
Vue.use( Carousel );
Vue.use( CarouselItem );

// Vue.use( VueMaterial.MdCore );
// Vue.use( VueMaterial.MdButton );
// Vue.use( VueMaterial.MdTooltip );
// Vue.use( VueMaterial.MdIcon );
// Vue.use( VueMaterial.MdInputContainer );
// Vue.use( VueMaterial.MdTable );

new Vue({
  el: "#app",
  router,
  render: h => h(App),
});