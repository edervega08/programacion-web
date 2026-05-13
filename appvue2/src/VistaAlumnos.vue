<template>
    <div id="alumnos">

    
        <h1>Alumnos</h1>
        
        <Identifica></Identifica>
        <Domicilio></Domicilio>
</div>
</template>
<script>
import Identifica from './Identifica.vue'
import Domicilio from './Domicilio.vue'

export default{
    name: 'VistaAlumnos',
    components:{
    Identifica,
    Domicilio

},
data(){
    return{
        alumnos: {
            identifica:{
                matricula: '123456',
                apellido1: 'Perez',
                apellido2: 'Gomez',
                nombre: 'Juan',
            },
            domicilio:{
                calle: 'Calle Falsa',
                nExt: '123',
                nInt: '23',
                estado: 'CDMX',
               munucipio: 'Cuauhtemoc',
            localidad: 'Centro'
            }
        }
    }
    

},
computed:{
    ahora(){
        return new Date().toLocaleString()
    }
},
methods:{

}
}
</script>
<style>
</style>
