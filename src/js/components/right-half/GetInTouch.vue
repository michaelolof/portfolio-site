<template>
  <div class="get-in-touch">
    <div class="header in-touch"><h4>Get in touch</h4></div>
    <div>
      <div class="in-touch">
        <md-input-container>
          <md-icon>phone</md-icon>
          <md-input type="tel" v-model="phoneNo" disabled></md-input>
        </md-input-container>
      </div>
      <div class="in-touch">
        <md-input-container>
          <md-icon>email</md-icon>
          <md-input type="email" v-model="email" disabled></md-input>
        </md-input-container>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        phoneNo: "09027190785",
        email: "myqrrlolof@yahoo.com",
      }
    }
  }
</script>


<style scoped>
  .get-in-touch {
    position: absolute;
    top: 1%;
    right: 2%;
    text-align: left;
    font-size: 0.9em;
  }

  .in-touch {
    padding: 2% 2% 2% 2%;
    background: bottom left repeat-x;
    background-image: linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.38) 33%, transparent 0%);
    background-size: 4px 1px;

  }

  .header {
  }

  .md-input-container {
    min-height: 0;
    padding-top: 0;
    margin: 0;
    cursor: text;
  }

  .md-icon, .md-input-container.md-has-value input {
    font-size: 2.1em;
  }

  .md-input-container.md-input-disabled:after {
    background: transparent;
    background-image: none;
    background-size: auto;
  }

  .md-input-disabled {
    color: rgba(0, 0, 0, .87);
  }
</style>