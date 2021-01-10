<template>
  <div class="skills">
    <!-- <div class="bio-header"><h1>Work Experience</h1></div> -->
    <ol class="body">
      <li>
        <h2>Personal Skills</h2>
        <h3>Effective communication, Time Management, Team Player, Problem solving, Analytical.</h3>
      </li>
      <li>
        <h2>Hobbies</h2>
        <h3>Reading, Problem solving, Learning new technologies and Traveling</h3>
      </li>
      <li>
        <h2>Languages</h2>
        <h3>English, Yoruba</h3>
      </li>
    </ol>
  </div>
</template>


<script>
  export default {
    
  }
</script>


<style scoped>
  h2 {
    line-height: 1.7em;
    font-weight: bolder;
    display: list-item;
    list-style-type: circle;
    list-style-position: outside;
  }

  h3 {
    line-height: 1.3em;
    font-weight: normal;
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