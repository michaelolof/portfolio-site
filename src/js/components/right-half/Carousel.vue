<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(view, index) in views" :key="index">
      <div class="container">
        <VerticalCentered>
          <div class="bio-blk">
            <component :is="view"></component>
          </div>
        </VerticalCentered>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
import VerticalCentered from "../../../js/libs/m-ui/layout/VerticalCentered.vue";

export default {
  props: ["views"],
  components: {
    VerticalCentered,
  },
  mounted() {
    // const carousel = document.querySelector(".el-carousel__container");
    // const mq = window.matchMedia("(min-width: 200px) and (max-width: 499px)");
    // if( !mq.matches ) return;
    
    // console.log( carousel );
  }
}
</script>


<style scoped>
  .bio-blk {
    width: 90%;
    margin: 0 auto;
  }

  .container {
    width: 100%;
    height: 100%;
  }
</style>