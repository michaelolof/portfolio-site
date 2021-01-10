<template>
  <div class="education">
    <div class="bio-header"><h1>Education</h1></div>
    <ol class="body">
      <li>
        <h3>University of Lagos Akoka — First Degree</h3>
        <p>(2013 - 2016)</p>
        <h4>B.Sc Civil and Environmental Engineering.</h4>
      </li>
      <li>
        <h3>King’s College Secondary School Lagos — SSCE</h3>
        <p>(2006 - 2012)</p>
        <h4>Obtained a Senior School Leaving Certificate.</h4>
      </li>
      <li>
        <h3>Home Science Nursery and Primary School Ikoyi</h3>
        <p>(1998 - 2006)</p>
        <h4>National Common Entrance Examination.</h4>
      </li>
    </ol>
  </div>
</template>


<script>
  export default {
    
  }
</script>


<style scoped>
  h3 {
    line-height: 1.7em;
    display: list-item;
    list-style-type: circle;
    list-style-position: outside;
  }

  .body > li {
    margin-top: 5%;
    margin-left: 3%;
  }

  h4 {
    font-weight: bold;
    margin-top: 2%;
  }
</style>