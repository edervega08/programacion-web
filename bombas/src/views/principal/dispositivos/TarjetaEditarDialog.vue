<template>

<!-- modal bootstrap que se abre desde listatarjetas.vue -->
<div
    class="modal fade"
    id="modalTarjeta"
    tabindex="-1"
>
    <div class="modal-dialog modal-lg">

        <div class="modal-content">

            <!-- encabezado del modal -->
            <div class="modal-header">

                <!-- titulo del formulario de edición -->
                <h5 class="modal-title">
                    Editar Dispositivo
                </h5>

                <!-- botón para cerrar el modal -->
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                ></button>

            </div>

            <!-- cuerpo del modal -->
            <div class="modal-body">

                <!-- campo nombre -->
                <div class="mb-3">

                    <label>Nombre</label>

                    <!-- enlaza directamente con la propiedad nombre
                         del objeto recibido desde listatarjetas.vue -->
                    <input
                        class="form-control"
                        v-model="dispositivo.nombre"
                    >
                </div>

                <!-- campo descripción -->
                <div class="mb-3">

                    <label>Descripción</label>

                    <!-- actualiza la descripción del dispositivo -->
                    <input
                        class="form-control"
                        v-model="dispositivo.descripcion"
                    >
                </div>

                <hr>

                <!-- sección de voltaje -->
                <h5>Voltaje</h5>

                <!-- valor nominal de voltaje -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.voltaje.nominal"
                    placeholder="Nominal"
                >

                <!-- valor mínimo de voltaje -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.voltaje.minimo"
                    placeholder="Mínimo"
                >

                <!-- valor máximo de voltaje -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.voltaje.maximo"
                    placeholder="Máximo"
                >

                <hr>

                <!-- sección de corriente -->
                <h5>Corriente</h5>

                <!-- corriente nominal -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.corriente.nominal"
                    placeholder="Nominal"
                >

                <!-- corriente mínima -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.corriente.minimo"
                    placeholder="Mínimo"
                >

                <!-- corriente máxima -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.corriente.maximo"
                    placeholder="Máximo"
                >

                <hr>

                <!-- sección de caudal -->
                <h5>Caudal</h5>

                <!-- caudal nominal -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.caudal.nominal"
                    placeholder="Nominal"
                >

                <!-- caudal mínimo -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.caudal.minimo"
                    placeholder="Mínimo"
                >

                <!-- caudal máximo -->
                <input
                    class="form-control mb-2"
                    v-model.number="dispositivo.caudal.maximo"
                    placeholder="Máximo"
                >

            </div>

            <!-- pie del modal -->
            <div class="modal-footer">

                <!-- cierra el modal sin guardar -->
                <button
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Cancelar
                </button>

                <!-- emite el evento guardar hacia listatarjetas.vue
                     donde realmente se actualiza el arreglo -->
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

    // nombre del componente modal
    name: 'TarjetaEditarDialog',

    props: {

        // recibe el dispositivo seleccionado
        // desde listatarjetas.vue
        dispositivo: {
            type: Object,
            required: true
        }
    },

    // envía el evento guardar a listatarjetas.vue
    // cuando el usuario presiona el botón guardar
    emits: ['guardar']
}
</script>