<template>
  <FullPage>
    <el-row>
      <el-col :span="12" class="left-grid">
        <Half>
          <LeftHalf />
        </Half>
      </el-col>
      <el-col :span="12" class="right-grid">
        <Half>
          <RightHalf />
        </Half>
      </el-col>
      <FloatingMenu />
    </el-row>
  </FullPage>
</template>


<script>
  import FullPage from "../../js/libs/m-ui/layout/FullPage.vue";
  import Half from "./Half.vue";
  import LeftHalf from "./LeftHalf.vue";
  import RightHalf from "./right-half/RightHalf.vue";
  import FloatingMenu from "./FloatingMenu.vue";

  export default {
    data() {
      return {
        
      }
    },
    components: {
      FullPage,
      Half,
      LeftHalf,
      RightHalf,
      FloatingMenu,
    }
  }
</script>


<style scoped>
  .el-row, .el-col {
    height: 100%;
    position: relative;
  }
  
</style>