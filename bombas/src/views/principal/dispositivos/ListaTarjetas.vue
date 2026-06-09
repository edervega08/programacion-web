<template>
    <div class="card">
        <div class="card-title p-3 border-bottom">
            <h3>Dispositivos</h3>
        </div>
        <div class="card-body d-flex flex-wrap gap-3"> 
            <Tarjeta 
                v-for="(dispositivo, idx) in dispositivos" 
                :key="idx" 
                :Dispositivo="dispositivo" 
            />
        </div> 
    </div>
</template>

<script>
import dispositivosDS from '@/servicios/dsDispositivos.js'
import Tarjeta from './Tarjeta.vue';

export default {
    name: 'ListaTarjetas',
    components: {
        Tarjeta
    },
    data() {
        return {
            dispositivos: []
        }
    },
    created() {
        dispositivosDS.getDispositivoslLista().then((datos) => {
            this.dispositivos = datos;
        });
    }
}
</script>
<style>

</style>