<template>
    <div>
        <ListaTerritorio :items="items" :headers="headers" ></ListaTerritorio>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ListaTerritorio from '@/components/ListaTerritorio.vue';
export default Vue.extend({
    components:{
        ListaTerritorio
    },
    data(){
        return{
            headers:[
                {
                    text:"Território",
                    value:"territorio"
                },
                {
                    text: "Data",
                    value:"dataTrabalhado"
                }
            ],
            items:[
                {
                    territorio: 1,
                    dataTrabalhado: "20/11/2023"
                }
            ]
        };
    },
    
})
</script>