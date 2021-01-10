<template>
  <div class="languages">
    <div class="stack-header">
      <h1>Languages</h1>
      <h4>This includes all the programming languages I've used over the years.</h4>
    </div>
    <ol class="body">
      <li><h3>JavaScript</h3></li>
      <li><h3>Php</h3></li>
      <li><h3>Go(Lang)</h3></li>
      <li><h3>Swift</h3></li>
      <li><h3>Java</h3></li>
    </ol>
  </div>
</template>


<script>

export default {
  components: {
  }
}
</script>


<style scoped>
  h3 {
    line-height: 1.3em;
    display: list-item;
    list-style-type: circle;
    list-style-position: outside;
  }

  h4 {
    line-height: 1.9em;
  }

  .body>li {
    margin-top: 5%;
    margin-left: 3%;
  }

  h4 {
    font-weight: bold;
    margin-top: 2%;
  }
</style>