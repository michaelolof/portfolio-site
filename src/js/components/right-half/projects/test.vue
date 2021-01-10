<template>
  <div class="project">
    <h2><a href="">{{ name }}</a></h2>
    <h3>{{ description }}</h3>
    <div class="img-blk"></div>
    <h4>{{ note }}</h4>
  </div>
</template>


<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      note: [String]
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
    background-color: #cccccc;
    width: 100%;
    height: 350px;
  }

  h4 {
    font-weight: bold;
    font-size: 1.4em;
    line-height: 1.3em;
  }

</style>