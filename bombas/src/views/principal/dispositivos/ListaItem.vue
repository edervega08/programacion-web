<template>
    <tr>
        <td>{{ itemR.id }}</td>
        <td>{{ itemR.nombre }}</td>

        <td>{{ itemR.voltaje.nominal }}</td>
        <td>{{ itemR.voltaje.minimo }}</td>
        <td>{{ itemR.voltaje.maximo }}</td>

        <td>{{ itemR.corriente.nominal }}</td>
        <td>{{ itemR.corriente.minimo }}</td>
        <td>{{ itemR.corriente.maximo }}</td>

        <td>{{ itemR.caudal.nominal }}</td>
        <td>{{ itemR.caudal.minimo }}</td>
        <td>{{ itemR.caudal.maximo }}</td>

        <td>
            <button
                class="btn btn-warning btn-sm me-2"
                @click="$emit('editar', itemR)"
            >
                Modificar
            </button>

            <button
                class="btn btn-danger btn-sm"
                @click="$emit('eliminar', itemR.id)"
            >
                Eliminar
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "ListaItem",
    props: {
        itemR: {
            type: Object,
            required: true
        }
    }
}
</script>