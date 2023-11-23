import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import db from '../firebase/firebaseInit'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    territorios:[
      
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async listarTerritorios({state}){
      const dataBase = await db.collection("trabalhoTerritorio").orderBy('data', 'desc');
      const resultadoDb = await dataBase.get();
      var territorios : any[] = [];
      resultadoDb.forEach((doc)=>{
        if (!state.territorios.some((t:any) => t!.id === doc.id)) {
          const data:any = {
            id: doc.data().id,
            numero: doc.data().numero,
            data: doc.data().data,
            trabalhado: doc.data().trabalhado,
          };
          state.territorios!.push(data as never);
        }
      })
      console.log(state.territorios)

    }
  },
  modules: {
  },
});
