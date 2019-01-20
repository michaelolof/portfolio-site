import Vue from "vue";

//import { Col, Row, Button, ButtonGroup, Carousel, CarouselItem } from "element-ui";
import Col from "element-ui/lib/col";
import Row from "element-ui/lib/row";
import Button from "element-ui/lib/button";
import ButtonGroup from "element-ui/lib/button-group";
import Carousel from "element-ui/lib/Carousel";
import CarouselItem from "element-ui/lib/carousel-item";

var VueMaterial = require('vue-material');

Vue.use( Col );
Vue.use( Row );
Vue.use( Button );
Vue.use( ButtonGroup );
Vue.use( Carousel );
Vue.use( CarouselItem );

Vue.use( VueMaterial.MdCore );
Vue.use( VueMaterial.MdButton );
Vue.use( VueMaterial.MdTooltip );
Vue.use( VueMaterial.MdIcon );
Vue.use( VueMaterial.MdInputContainer );
Vue.use( VueMaterial.MdTable );