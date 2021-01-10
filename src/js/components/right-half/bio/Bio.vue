<template>
  <div class="bio">
    <Carousel :views="views"></Carousel>
  </div>
</template>


<script>
  import Carousel from "../Carousel.vue";
  import PersonalInformation from "./PersonalInformation.vue";
  import Experience from "./Experience.vue";
  import Education from "./Education.vue";
  import Skills from "./Skills.vue";

  export default {
    data() {
      return {
        views: [ PersonalInformation, Experience, Education, Skills ],
      }
    },
    components: {
      Carousel,
      PersonalInformation,
      Experience,
      Education,
    }
  }
</script>


<style scoped>
  .bio {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
  }
</style>