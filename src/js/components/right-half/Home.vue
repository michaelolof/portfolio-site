<template>
  <div class="home">
    <GetInTouch />
    <VerticalCentered>
      <div class="bio-blk">
        <h3>Hey there! I am</h3>
        <h1>Michael Olofinjana.</h1>
        <div class="skills-blk">
          <h2>
            I do 
            <VueTyper
              :text="['Front End Development', 'Back End Development', 'SQL and Database Management']"
              :pre-erase-delay='4000'
              erase-style="clear"
              initial-action="erasing"
              >
            </VueTyper>
          </h2>
          <!-- <h3>
            with
            <VueTyper
             :text="['VueJS, JavaScript, TypeScript, ES6...', 'PHP (Laravel), Golang', 'MySQL, IndexDB (Lovefield)']"
             :pre-erase-delay='4000'
             erase-style="clear"
            initial-action="erasing"
             >
            </VueTyper>
          </h3> -->
        </div>
      </div>
    </VerticalCentered>
  </div>
</template>


<script>
  import VerticalCentered from "../../../js/libs/m-ui/layout/VerticalCentered.vue";
  import { VueTyper } from "vue-typer";
  import GetInTouch from "./GetInTouch.vue";

  export default {
    components: {
      VerticalCentered,
      VueTyper,
      GetInTouch,
    }
  }
</script>


<style scoped>
  h1 {
    line-height: 1.2em;
    margin: 5% 0;
  }

  h2 {
    margin-bottom: 5%;
  }

  .home {
    background-color: #f8f8f8;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 3% 0;
  }

  .bio-blk {
    margin: auto;
    width: 90%;
  }

</style>