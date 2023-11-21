<template>
    <div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th v-for="(item, index) in headersL" :key="index">
                            {{item.text}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="itemsL.length == 0">
                        <td :colspan="headersL.length">Não há dados disponíveis</td>
                    </tr>
                    <tr v-else v-for="(item, index) in itemsL" :key="index">
                        <td  v-for="(header, indexC) in headersL" :key="indexC" :data-th="header.nome" >
                            <slot :name="`item.${header.value}`" :item="item">
                                <span >
                                    {{item[`${header.value}`]}}
                                </span>
                            </slot>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "SmartList",
    props:{
        items: Array,
        headers: Array,
    },

    data(){
        return {
            headersL: this.headers,
            itemsL: this.items,
            isExpanded: false,
            selectedRowID: {},

        };
    },

    methods:{

       
    }
})
</script>
<style  scoped>
    table{
        font-family:sans-serif;
        width:100%;
	    border:1px solid
        
    }
    td {
        text-align:left;
        background-color:#eee;    
    }
    th {
        padding:.25em .5em;
        background-color:#009;
        color:#fff;
    }
</style>