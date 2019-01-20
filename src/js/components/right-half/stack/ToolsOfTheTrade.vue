<template>
  <div class="tools">
    <div class="stack-header">
      <h1>Tools of the Trade</h1>
    </div>
    <ol class="body">
      <li>
        <h3>Front-End Development</h3>
        <h4>
          HTML, CSS, JavaScript (ES5 & ES6), Sass & Compass, TypeScript, VueJS, Webpack, Mocha, Karma, Puppeteer, PhantomJS, NightWatch, Material Design, Ant Design
        </h4>
      </li>
      <li>
        <h3>Back-End Development</h3>
        <h4>NodeJS, Laravel (Php), Golang.</h4>
      </li>
      <li>
        <h3>Database Management</h3>
        <h4>MongoDB, MYSQL, phpMyAdmin, IndexedDB - Lovefield, Redis.</h4>
      </li>
      <li>
        <h3>Others</h3>
        <h4>ElectronJS, Cordova / PhoneGap</h4>
      </li>
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