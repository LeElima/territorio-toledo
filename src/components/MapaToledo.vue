<template>
    <div>
      <div id="mapContainer" />
    </div>
  </template>
  
  <script>
  import Vue from 'vue';
  import statesData from '../JsonToledo'
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
  
  export default Vue.extend({
    name: 'LMap',
    props: {
      markers: {
        type: Array,
        required: false,
        default: () => []
      }
    },
  
    async mounted() {
      this.createMapLayer();
      await this.createJson();
    },
  
    beforeDestroy() {
      if (this.map) {
        this.map.remove();
      }
    },
  
    methods: {
      async createJson() {
        const response = await fetch("https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-31-mun.json");
        const data = await response.json();
        console.log(statesData);
        L.geoJson(statesData, { style: this.style, onEachFeature: this.onEachFeature }).addTo(this.map);
      },
  
      createMapLayer() {
        this.map = L.map('mapContainer').setView([-22.7432924, -46.3739116, 16], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
  
        if (this.markers.length) {
          this.setMarkers();
        }
      },
  
      setMarkers() {
        this.markers.forEach((marker) => {
          L.marker([marker.latitude, marker.longitude]).addTo(this.map)
            .bindPopup(marker.descricao);
        });
      },
  
      createAction() {
        document.getElementById("btnTrabalhar").addEventListener('click', () => {
          console.log('Entrei');
        });
      },
  
      style(feature, layer) {
        // Utilize o Vuex aqui se necessário
       const territorios = this.$store.state.territorios;
       const territorio = territorios.filter(x=>x.numero == feature.name)
       if(territorio.length >0){
        return{
            fillColor: territorio[0].trabalhado ? 'red' : '#3388ff',
            weight: 0.5,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 0.8,
        }
       }
       else{
        return{
            fillColor: 'blue',
            weight: 0.5,
            opacity: 1,
            color: 'white',
            dashArray: '1',
            fillOpacity: 0.8,
        }
       }
      },
  
      onEachFeature(feature, layer) {
        const div = document.createElement("div");
        const territorios = this.$store.state.territorios;
       const territorio = territorios.filter(x=>x.numero == feature.name)   

        div.innerHTML = `<br>Nº Territorio: ${feature.name}<br>`;
        if(!territorio[0].trabalhado){
            const button = document.createElement("button");
            button.innerHTML = "Trabalhar";
    
            button.onclick = () => {
            console.log(feature.name);
            };
  
        div.appendChild(button);
        }
        
        layer.bindPopup(div);
      }
    }
  });
  </script>
  
  <style scoped>
  #mapContainer {
    width: 100%;
    height: 550px;
  }
  </style>