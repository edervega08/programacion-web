
<template>

    <!-- tarjeta individual que muestra la información de un dispositivo -->
    <div class="card m-2" style="width: 18rem;">

        <div class="card-body">

            <!-- muestra el id recibido desde listatarjetas.vue -->
            <h5 class="card-title">
                ID: {{ Dispositivo.id }}
            </h5>

            <!-- muestra el nombre del dispositivo -->
            <h6 class="card-subtitle mb-2 text-muted">
                Nombre: {{ Dispositivo.nombre }}
            </h6>

            <!-- lista con los valores del dispositivo -->
            <ol>

                <!-- sección de voltaje -->
                <li>
                    Voltaje

                    <ul>
                        <li>Nominal: {{ Dispositivo.voltaje.nominal }}</li>
                        <li>Mínimo: {{ Dispositivo.voltaje.minimo }}</li>
                        <li>Máximo: {{ Dispositivo.voltaje.maximo }}</li>
                    </ul>
                </li>

                <!-- sección de corriente -->
                <li>
                    Corriente

                    <ul>
                        <li>Nominal: {{ Dispositivo.corriente.nominal }}</li>
                        <li>Mínimo: {{ Dispositivo.corriente.minimo }}</li>
                        <li>Máximo: {{ Dispositivo.corriente.maximo }}</li>
                    </ul>
                </li>

                <!-- sección de caudal -->
                <li>
                    Caudal

                    <ul>
                        <li>Nominal: {{ Dispositivo.caudal.nominal }}</li>
                        <li>Mínimo: {{ Dispositivo.caudal.minimo }}</li>
                        <li>Máximo: {{ Dispositivo.caudal.maximo }}</li>
                    </ul>
                </li>

            </ol>

            <!-- botones de acciones -->
            <div class="d-flex justify-content-between mt-3">

                <!-- envía el dispositivo seleccionado a listatarjetas.vue -->
                <!-- allí se ejecuta abrirModal() -->
                <button
                    type="button"
                    class="btn btn-primary"
                    @click="$emit('editar', Dispositivo)"
                >
                    <i class="bi bi-pencil"></i>
                    MODIFICAR
                </button>

                <!-- envía únicamente el id del dispositivo -->
                <!-- listatarjetas.vue recibe el evento y ejecuta eliminarDispositivo() -->
                <button
                    type="button"
                    class="btn btn-danger"
                    @click="$emit('eliminar', Dispositivo.id)"
                >
                    <i class="bi bi-x-circle"></i>
                    ELIMINAR
                </button>

            </div>

        </div>

    </div>

</template>

<script>
export default {

    // nombre del componente
    name: "Tarjeta",

    // eventos que este componente puede enviar al componente padre
    emits: [
        'editar',
        'eliminar'
    ],

    props: {

        // recibe un objeto dispositivo desde listatarjetas.vue
        Dispositivo: {
            type: Object,
            required: true
        }
    }
}
</script>
