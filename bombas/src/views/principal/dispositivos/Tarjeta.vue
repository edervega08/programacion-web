<template>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">ID: {{ Dispositivo.id }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nombre: {{ Dispositivo.nombre }}</h6>
            
            <ol>
                <li>Voltaje
                    <ul> 
                        <li>Nominal: {{ Dispositivo.voltaje.nominal }}</li>
                        <li>Mínimo: {{ Dispositivo.voltaje.minimo }}</li>
                        <li>Máximo: {{ Dispositivo.voltaje.maximo }}</li>
                    </ul>
                </li>
                <li>Corriente
                    <ul> 
                        <li>Nominal: {{ Dispositivo.corriente.nominal }}</li>
                        <li>Mínimo: {{ Dispositivo.corriente.minimo }}</li>
                        <li>Máximo: {{ Dispositivo.corriente.maximo }}</li>
                    </ul>
                </li>
                <li>Caudal
                    <ul> 
                        <li>Nominal: {{ Dispositivo.caudal.nominal }}</li>
                        <li>Mínimo: {{ Dispositivo.caudal.minimo }}</li>
                        <li>Máximo: {{ Dispositivo.caudal.maximo }}</li>
                    </ul>
                </li>
            </ol>
            <!-- Botones -->
            <div class="d-flex justify-content-between mt-3">
                <button type="button" class="btn btn-primary">
                    <i class="bi bi-save2"></i> MODIFICAR
                </button>

                <button type="button" class="btn btn-danger">
                    <i class="bi bi-x-circle"></i> ELIMINAR
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tarjeta",
    props: {
        Dispositivo: {
            type: Object,
            required: true
        }
    }
}
</script>