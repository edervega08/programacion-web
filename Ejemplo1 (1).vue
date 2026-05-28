<template>
    <div>
        <form>
            <div>
                <label for="matricula">Matricula: </label>
                <input type="text" id="matricula" v-model="identifica.matricula"/>
            <div>
                <label for="nombre">Nombre: </label>
                <input type="text" id="nombre" v-model="identifica.nombre"/>
            </div>
            <div>
                <label for="paterno">Paterno: </label>
                <input type="text" id="paterno" v-model="identifica.paterno"/>
            </div>
            <div>
                <label for="materno">Materno: </label>
                <input type="text" id="materno" v-model="identifica.materno"/>
            </div>
            </div>
        </form>
        <hr/>
        <p>
            {{ identifica.matricula }} {{ identifica.nombre }}
        </p>

    </div>
</template>
<script>
export default {
    name: 'Ejemplo1',
    data() {
        return {
            identifica: {
                matricula:'000000A',
                nombre: 'Nombre1',
                paterno: 'Apellido1',
                materno: 'apellido2'
            }
        }
    }
}
</script>
<style>
</style>