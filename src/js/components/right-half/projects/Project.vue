<template>
  <div class="project">
    <h2><a @click="newTab" :href="link">{{ name }}</a></h2>
    <h3>{{ description }}</h3>
    <div class="img-blk" v-show="images">
      <el-carousel indicator-position="none">
        <el-carousel-item v-for="(image, index) in images" :key="index">    
          <img ref="imgs" :src="'images/projects/' + image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <h4>{{ note }}</h4>
  </div>
</template>


<script>
  import Carousel from "../../right-half/Carousel.vue";

  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      note: [ String ],
      images: {
        type: Array,
      }
    },
    methods: {
      newTab(e) {
        e.preventDefault();
        window.open( this.link );
      }
    },
    components: {
      Carousel,
    },
    mounted() {
    }
  }



</script>


<style>
  .project {
    margin-top: 4%;
  }

  h2 {
    line-height: 1.9em;
  }

  h3 {
    line-height: 1.3em;
  }

  .img-blk {
    margin: 2% 0;
    width: 100%;
  }

  .img-blk img {
    max-width: 100%;
    height: 100%;
  }
  .el-carousel__container {
    height: 350px;
  }

  h4 {
    font-weight: bold;
    font-size: 1.4em;
    line-height: 1.3em;
  }

</style>