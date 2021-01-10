<template>
  <div class="personal-information">
    <div class="bio-header"><h1>Personal Profile</h1></div>
    <md-table v-once>
      <md-table-body>
        <md-table-row v-for="(info, index) in infos" :key="index">
          <md-table-cell><h2>{{ info.name }}</h2></md-table-cell>
          <md-table-cell><h2>{{ info.value }}</h2></md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>


<script>
  export default {
    data() {
      const infos = [
        { name: "Sex", value: "Male" },
        { name: "Marital Status", value: "Single" },
        { name: "Nationality", value: "Nigerian" },
        { name: "State of Origin", value: "Lagos State" },
        { name: "Date of Birth", value: "28th Jan, 1994" },
      ];

      return  {
        infos,
      }
    }
  }
</script>


<style scoped>
  .md-table tbody .md-table-row {
    border: none;
  }
  
  .md-table .md-table-cell {
    height: 2.8em;
  }
  
  h2 {
    color: rgba(0,0,0,0.87);
    padding: 0.55em 0;
  }
</style>