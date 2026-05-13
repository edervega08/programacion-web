<template>
    <div id="identificaAlumno">
        <form>
            <fieldset>
                <legend>Alumno</legend>
                <div>
                    <label for="matricula">Matricula</label>
                    <input type="text" id="matricula" name="matricula">
                </div>
                <div>
                    <label for="apellido1">Apellido Paterno</label>
                    <input type="text" id="apellido1" name="apellido1">
                </div>
                <div>
                    <label for="apellido2">Materno</label>
                    <input type="text" id="apellido2" name="apellido2">
                </div>
                <div>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre">
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Identifica',
}
</script>

<style>
</style>