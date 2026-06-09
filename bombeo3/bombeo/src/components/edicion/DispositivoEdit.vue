<template>
    <div class="card">
        <div clas="card-body"> 
            <div class="card-title">
                <h4>Edicion dispositivo</h4>
            </div>
            <form>
                <div class="mb-3">
                    <label class="form-label" for="id"> Identificador </label>
                    <input id="id" class="form-control" v-model="dispositivo_id"/>
                </div>
                <div class="mb-3"> 
                    <label class="form-label" for="nombre"> Nombre </label>
                    <input type="text" id="nombre" v-model="dispositivo_nombre"/>
                </div>
                <button type="button" class="btn btn-primary">Guardar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DispositivoEdit',
    components: {

    },
    props: {

    },
    data(){
        return {
            dispositivo:{
                id:0,
                nombre:'Bomba1Cu'
            }
        }
    }
}
</script>