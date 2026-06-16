import EditarDialog from './EditarDialog.vue'

<template>
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
                        <label>Nombre</label>
                        <input
                            class="form-control"
                            v-model="dispositivo.nombre"
                        >
                    </div>

                    <div class="mb-3">
                        <label>Descripción</label>
                        <input
                            class="form-control"
                            v-model="dispositivo.descripcion"
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
                                v-model.number="dispositivo.voltaje.nominal"
                            >
                        </div>

                        <div class="col-md-4">
                            <label>Mínimo</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="dispositivo.voltaje.minimo"
                            >
                        </div>

                        <div class="col-md-4">
                            <label>Máximo</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="dispositivo.voltaje.maximo"
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
                                v-model.number="dispositivo.corriente.nominal"
                            >
                        </div>

                        <div class="col-md-4">
                            <label>Mínimo</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="dispositivo.corriente.minimo"
                            >
                        </div>

                        <div class="col-md-4">
                            <label>Máximo</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="dispositivo.corriente.maximo"
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
                                v-model.number="dispositivo.caudal.nominal"
                            >
                        </div>

                        <div class="col-md-4">
                            <label>Mínimo</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="dispositivo.caudal.minimo"
                            >
                        </div>

                        <div class="col-md-4">
                            <label>Máximo</label>
                            <input
                                type="number"
                                class="form-control"
                                v-model.number="dispositivo.caudal.maximo"
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
                        @click="$emit('guardar')"
                    >
                        Guardar
                    </button>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditarDialog',

    props: {
        dispositivo: {
            type: Object,
            required: true
        },

        modoEdicion: {
            type: Boolean,
            required: true
        }
    },

    emits: ['guardar']
}
</script>