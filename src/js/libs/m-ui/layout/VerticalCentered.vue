<template>
  <div class="vertical-centered-container" ref="verticalCentered" :style="{padding}">
    <div class="middle">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  export default {
    props: ["padding"],
    mounted() {
     // Add some default styles to the parent element.
     const parent = this.$refs.verticalCentered.parentNode;
     parent.style.position = "relative";
     parent.style.overflowY = "auto";
   } 
  }
</script>


<style>
  .vertical-centered-container {
    display: table;
    height: 100%;
    width: 100%;
  }

  .middle {
    display: table-cell;
    vertical-align: middle;
  }
</style>