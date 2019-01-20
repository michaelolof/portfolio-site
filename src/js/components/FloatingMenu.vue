<template>
  <div class="menu-container">
    <div class="menu-blk">
      <md-button class="md-fab md-clean bio-btn shift-upper" @click="linkTo('/bio')">
        <md-icon>portrait</md-icon>
        <md-tooltip class="tooltip" md-direction="top">Bio</md-tooltip>
      </md-button>
      <md-button class="md-fab md-primary projects-btn shift-up" @click="linkTo('/projects')">
        <md-icon>work</md-icon>
        <md-tooltip class="tooltip" md-direction="top">Projects</md-tooltip>
      </md-button>
      <md-button class="md-fab home-btn"  @click="linkTo('/')">
        <md-icon>home</md-icon>
        <md-tooltip class="tooltip" md-direction="top">Home</md-tooltip>
      </md-button>
      <md-button class="md-fab md-warn github-btn shift-up"  @click="newTab('https://www.github.com/michaelolof')">
        <md-icon>palette</md-icon>
        <md-tooltip class="tooltip" md-direction="top">Github</md-tooltip>
      </md-button>
      <md-button class="md-fab stack-btn shift-upper" @click="linkTo('/stack')">
        <md-icon>layers</md-icon>
        <md-tooltip class="tooltip" md-direction="top">Stack</md-tooltip>
      </md-button>
    </div>
  </div>
</template>


<script>
  export default {
    methods: {
      linkTo( path ){
        this.$router.push({ path });
      },
      newTab(path) {
        window.open( path );
      }
    }    
  }
</script>


<style scoped>
  .menu-container {
    position: absolute;
    width: 100%;
    bottom: 5%;
    text-align: center;
    z-index: 9999;
  }

  .md-button {
    margin-left: 2%;
    margin-right: 2%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2), 0 5px 5px rgba(0,0,0,0.14), 0 6px 3px -5px rgba(0,0,0,0.12)
  }
  
  .tooltip {
    font-size: 1em;
    width: auto;
    display: inline-block;
    padding: 5px 10px;
  }

  .shift-up {
    margin-top: -5px;
  }

  .shift-upper {
    margin-top: -30px;
  }

  .bio-btn {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
  .bio-btn:hover {
    background-color: rgb(255, 255, 255) !important;
  }

  .projects-btn {
    background-color: rgba(255, 255, 0, 0.2) !important;
  }
  .projects-btn:hover {
    background-color: rgb(255, 255, 0) !important;
    color: rgb(0, 0, 0, 0.8) !important;
  }

  .home-btn {
    background-color: rgba(0, 0, 0, 0.2) !important;
  }
  .home-btn:hover {
    background-color: rgba(0, 0, 0, 0.8) !important;    
  }

  .github-btn {
    background-color: rgba(255, 87, 34, 0.2) !important;
  }
  .github-btn:hover {
    background-color: rgb(255, 87, 34) !important;    
  }

  .stack-btn {
    background-color: rgba(233, 30, 99, 0.2) !important;
  }
  .stack-btn:hover {
    background-color: rgb(233, 30, 99) !important;
  }
</style>
