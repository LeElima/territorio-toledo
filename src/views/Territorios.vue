<template>
    <div class="pagina">
      <MapaToledo />
    </div>
  </template>
  
  <script lang="ts">
  import vue from 'vue';
  import MapaToledo from '../components/MapaToledo.vue';
  
  export default vue.extend({
    components:{
        MapaToledo,
    },
  });

  
  </script>
  <style >
  
      .home{
        /* height: 500px !important; */
        }
  
  </style>
  