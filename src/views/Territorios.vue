<template>
    <div class="pagina">
      <MapaToledo @trabalhar="trabalhar"/>
    </div>
  </template>
  
  <script lang="ts">
  import vue from 'vue';
  import MapaToledo from '../components/MapaToledo.vue';
  
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/storage';
  import db from '../firebase/firebaseInit'

  export default vue.extend({
    components:{
        MapaToledo,
    },
    methods:{
        async trabalhar(item:any){
          try{
            const timestamp = await Date.now();
            const dataBase = await db.collection("trabalhoTerritorio").doc();
            
            await dataBase.set({
              id:  dataBase.id,
              numero: item.name,
              trabalhado: true,
              data: timestamp,
            });
            location.reload()
          }
          catch(e){
            console.log(e)
          }
          finally{

          }
          
        }
    }
  });

  
  </script>
  <style >
  
      .home{
        /* height: 500px !important; */
        }
  
  </style>
  