
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
                @editar="abrirModal"
                @eliminar="eliminarDispositivo"
            />

        </div>

        <TarjetaEditarDialog
            :dispositivo="dispositivoEditar"
            @guardar="guardarCambios"
        />

    </div>
</template>

<script>
import dispositivosDS from '@/servicios/dsDispositivos.js'
import Tarjeta from './Tarjeta.vue'
import TarjetaEditarDialog from './TarjetaEditarDialog.vue'
import * as bootstrap from 'bootstrap'

export default {

    name: 'ListaTarjetas',

    components: {
        Tarjeta,
        TarjetaEditarDialog
    },

    data() {
        return {
            dispositivos: [],

            dispositivoEditar: {
                id: null,
                nombre: '',
                descripcion: '',
                voltaje: {
                    nominal: 0,
                    minimo: 0,
                    maximo: 0
                },
                corriente: {
                    nominal: 0,
                    minimo: 0,
                    maximo: 0
                },
                caudal: {
                    nominal: 0,
                    minimo: 0,
                    maximo: 0
                }
            }
        }
    },

    created() {

        dispositivosDS
            .getDispositivoslLista()
            .then(datos => {
                this.dispositivos = datos
            })
    },

    methods: {

        abrirModal(dispositivo) {

            this.dispositivoEditar =
                JSON.parse(
                    JSON.stringify(dispositivo)
                )

            const modal =
                new bootstrap.Modal(
                    document.getElementById(
                        'modalTarjeta'
                    )
                )

            modal.show()
        },

        guardarCambios() {

            const indice =
                this.dispositivos.findIndex(
                    d => d.id === this.dispositivoEditar.id
                )

            if (indice !== -1) {

                this.dispositivos[indice] =
                    JSON.parse(
                        JSON.stringify(
                            this.dispositivoEditar
                        )
                    )
            }

            bootstrap.Modal
                .getInstance(
                    document.getElementById(
                        'modalTarjeta'
                    )
                )
                .hide()
        },

        eliminarDispositivo(id) {

            const confirmar =
                confirm(
                    '¿Desea eliminar este dispositivo?'
                )

            if (!confirmar) return

            this.dispositivos =
                this.dispositivos.filter(
                    d => d.id !== id
                )
        }
    }
}
</script>

<style scoped>

.card-title{
    background-color: #f8f9fa;
}

</style>

