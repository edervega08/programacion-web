<template>
    <div class="container-fluid">
        <table class="table">
            <thead>
                <tr> 
                    <th rowspan="2">id</th>
                    <th rowspan="2">Nombre</th>
                    <th colspan="3">Voltaje</th>
                    <th colspan="3">Corriente</th>
                    <th colspan="3">Caudal</th>
                </tr>
                <tr>
                    <th>Nominal</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Nominal</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Nominal</th>
                    <th>Min</th>
                    <th>Max</th>
                </tr>
            </thead>
            <tbody>
                <ListaItem v-for="(dispositivo, index) in dispositivos" :key="index" :item-r="dispositivo" />
            </tbody>
        </table>    
    </div>
</template>

<script>
import dispositivosDS from '@/servicios/dsDispositivos.js'
import ListaItem from './ListaItem.vue';
export default {
    name: 'ListaDispositivos',
    components: {
        ListaItem
    },
    data() {
        return {
            dispositivos: [ ]
        }
    },


    created(){
        //this.dispositivos = dispositivosDS.getDispositivosData()
        dispositivosDS.getDispositivoslLista().then((datos) => (this.dispositivos=datos)
        )
    }
}
</script>