<template>
  <div class="stack bio">
    <Carousel :views="views" />
  </div>
</template>


<script>
  import Carousel from "../../right-half/Carousel.vue";
  import ToolsOfTheTrade from "./ToolsOfTheTrade.vue";
  import Languages from "./Languages.vue";

  export default {
    data() {
      return {
        views: [ ToolsOfTheTrade, Languages ]
      }
    },
    components: {
      Carousel,
    }
  }
</script>


<style scoped>
  .stack {
    width: 100%;
    height: 100%;
  }
</style>