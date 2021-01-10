<template>
  <div class="m-fullpage">
    <slot></slot>
  </div>
</template>


<script>
  export default {
    
  }
</script>


<style>
  body, html {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .m-fullpage {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #1d1631;
  }
</style>