<template>
    <div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Editar dispositivo</h5>
    <form action="">
        <div class="row">

             <!--nombre y id-->
            <div class="col-md-1 col-xs-6" >
                 <label for="id" class="form-label">id</label>
                 <input type="text" v-model="dispositivo.id" id="id" class="form-control">
            </div>
            <div class="col-md-8 cot-xs-12">
                <label for="nombre" class="form-label">nombre</label>
                <input type="text" v-model="dispositivo.nombre" id="nombre" class="form-control">
            </div>

            <!--Descrpcion-->
            <div class="mb-3">
            <label class="form-label">Descripcion</label>
            <textarea class="form-control" id="Descripcion" rows="3"></textarea>
            </div>

             <!--voltaje-->
            <label for="">Voltaje</label>
            <div class="col-md-4 col-xs-6" >
                 <label for="nominal" class="form-label">nominal</label>
                 <input type="text" v-model="dispositivo.voltaje.nominal" id="nominal" class="form-control">
            </div>
            <div class="col-md-4 cot-xs-12">
                <label for="nombre" class="form-label">min</label>
                <input type="text" v-model="dispositivo.voltaje.minimo" id="minimo" class="form-control">
            </div>
            <div class="col-md-4 cot-xs-12">
                <label for="nombre" class="form-label">maximo</label>
                <input type="text" v-model="dispositivo.voltaje.maximo" id="maximo" class="form-control">
            </div>

            <!--corriente-->
            <label for="">Corriente</label>
            <div class="col-md-4 col-xs-6" >
                 <label for="id" class="form-label">nominal</label>
                 <input type="text" v-model="dispositivo.corriente.nominal" id="nominal" class="form-control">
            </div>
            <div class="col-md-4 cot-xs-12">
                <label for="nombre" class="form-label">min</label>
                <input type="text" v-model="dispositivo.corriente.minimo" id="minimo" class="form-control">
            </div>
            <div class="col-md-4 cot-xs-12">
                <label for="nombre" class="form-label">maximo</label>
                <input type="text" v-model="dispositivo.corriente.maximo" id="maximo" class="form-control">
            </div>

            <!--caudal-->
            <label for="">caudal</label>
            <div class="col-md-4 col-xs-6" >
                 <label for="id" class="form-label">nominal</label>
                 <input type="text" v-model="dispositivo.caudal.maximo" id="nominal" class="form-control">
            </div>
            <div class="col-md-4 cot-xs-12">
                <label for="nombre" class="form-label">min</label>
                <input type="text" v-model="dispositivo.caudal.minimo" id="minimo" class="form-control">
            </div>
            <div class="col-md-4 cot-xs-12">
                <label for="nombre" class="form-label">maximo</label>
                <input type="text" v-model="dispositivo.caudal.maximo" id="maximo" class="form-control">
            </div>


    </div>
    </form>
    <button type="button" class="bi bi-save2">guardar</button>
    <button type="button" class="bi bi-x-circle">cancelar</button>
  </div>
</div>
</template>

<script>
export default{
    name:"EditarDispositivo",
    data(){
        return{
            dispositivo: {
                id: 1,
                nombre: 'Bomba1Cu',
                descripcion: 'Bomba de agua industrial',

                voltaje: {
                    valor: 220,
                    nominal: 220,
                    minimo: 200,
                    maximo: 240
                },

                corriente: {
                    valor: 15,
                    nominal: 15,
                    minimo: 10,
                    maximo: 20
                },

                caudal: {
                    valor: 120,
                    nominal: 120,
                    minimo: 100,
                    maximo: 140
                }
            }
        }
    }
}
</script>

<style scoped>

.form-control{
    border-radius: 10px;
    background-color: rgb(96, 223, 71);
}

</style>