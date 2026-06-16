<template>
    <div class="mb-3">
    <button
        class="btn btn-success"
        @click="nuevoDispositivo"
    >
        Nuevo Dispositivo
    </button>
</div>
    <div class="container-fluid">

        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th rowspan="2">Id</th>
                    <th rowspan="2">Nombre</th>

                    <th colspan="3">Voltaje</th>
                    <th colspan="3">Corriente</th>
                    <th colspan="3">Caudal</th>

                    <th rowspan="2">Acciones</th>
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
                <ListaItem
                    v-for="(dispositivo, index) in dispositivos"
                    :key="index"
                    :item-r="dispositivo"
                    @editar="abrirModal"
                    @eliminar="eliminarDispositivo"
                />
            </tbody>
        </table>

        <!-- Modal -->
        <div
            class="modal fade"
            id="modalEditar"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title">
                         {{ modoEdicion ? 'Modificar Dispositivo' : 'Nuevo Dispositivo' }}
                        </h5>

                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div class="modal-body">

                        <div class="mb-3">
                            <label class="form-label">
                                Nombre
                            </label>

                            <input
                                type="text"
                                class="form-control"
                                v-model="dispositivoEditar.nombre"
                            >
                        </div>

                        <div class="mb-3">
                            <label class="form-label">
                                Descripción
                            </label>

                            <input
                                type="text"
                                class="form-control"
                                v-model="dispositivoEditar.descripcion"
                            >
                        </div>

                        <hr>

                        <h5>Voltaje</h5>

                        <div class="row">

                            <div class="col-md-4">
                                <label>Nominal</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.voltaje.nominal"
                                >
                            </div>

                            <div class="col-md-4">
                                <label>Mínimo</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.voltaje.minimo"
                                >
                            </div>

                            <div class="col-md-4">
                                <label>Máximo</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.voltaje.maximo"
                                >
                            </div>

                        </div>

                        <hr>

                        <h5>Corriente</h5>

                        <div class="row">

                            <div class="col-md-4">
                                <label>Nominal</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.corriente.nominal"
                                >
                            </div>

                            <div class="col-md-4">
                                <label>Mínimo</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.corriente.minimo"
                                >
                            </div>

                            <div class="col-md-4">
                                <label>Máximo</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.corriente.maximo"
                                >
                            </div>

                        </div>

                        <hr>

                        <h5>Caudal</h5>

                        <div class="row">

                            <div class="col-md-4">
                                <label>Nominal</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.caudal.nominal"
                                >
                            </div>

                            <div class="col-md-4">
                                <label>Mínimo</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.caudal.minimo"
                                >
                            </div>

                            <div class="col-md-4">
                                <label>Máximo</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model.number="dispositivoEditar.caudal.maximo"
                                >
                            </div>

                        </div>

                    </div>

                    <div class="modal-footer">

                        <button
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>

                        <button
                            class="btn btn-primary"
                            @click="guardarCambios"
                        >
                            Guardar
                        </button>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ListaItem from './ListaItem.vue'
import dispositivosDS from '@/servicios/dsDispositivos.js'
import * as bootstrap from 'bootstrap'

export default {
    name: 'ListaDispositivos',

    components: {
        ListaItem
    },

    data() {
        return {
            dispositivos: [],
            modoEdicion: false,
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

    nuevoDispositivo() {

        this.modoEdicion = false

        this.dispositivoEditar = {
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

        const modal =
            new bootstrap.Modal(
                document.getElementById('modalEditar')
            )

        modal.show()
    },

    abrirModal(dispositivo) {

        this.modoEdicion = true

        this.dispositivoEditar =
            JSON.parse(JSON.stringify(dispositivo))

        const modal =
            new bootstrap.Modal(
                document.getElementById('modalEditar')
            )

        modal.show()
    },

    guardarCambios() {

        if (this.modoEdicion) {

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

        } else {

            const nuevoId =
                this.dispositivos.length > 0
                    ? Math.max(
                        ...this.dispositivos.map(
                            d => d.id
                        )
                    ) + 1
                    : 0

            const nuevoDispositivo =
                JSON.parse(
                    JSON.stringify(
                        this.dispositivoEditar
                    )
                )

            nuevoDispositivo.id = nuevoId

            this.dispositivos.push(
                nuevoDispositivo
            )
        }

        bootstrap.Modal
            .getInstance(
                document.getElementById('modalEditar')
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
                dispositivo => dispositivo.id !== id
            )
    }}
}
</script>

<style scoped>

.container-fluid{
    background-color: rgb(96, 223, 71);
    padding: 20px;
    border-radius: 12px;
}

.table{
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
}

.table thead{
    background-color: #0d6efd;
    color: white;
    text-align: center;
}

.table tbody tr:nth-child(even){
    background-color: #f8f9fa;
}

.table tbody tr:hover{
    background-color: #dbeafe;
}

.modal-body h5{
    margin-top: 15px;
}

</style>