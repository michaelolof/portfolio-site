<template>
  <div class="left-half">
    <VerticalCentered>
      <div class="profile-blk"></div>
    </VerticalCentered>
  </div>
</template>


<script>
  import VerticalCentered from "../libs/m-ui/layout/VerticalCentered.vue"

  export default {
    components: {
      VerticalCentered,
    }  
  }
</script>


<style scoped>
  .left-half, .profile-blk {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  
  .left-half {
    width: 100%; 
    height: 100%;
    position: relative;
  }

  .profile-blk {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background-color: blue;
    border-radius: 50%;
  }
</style>