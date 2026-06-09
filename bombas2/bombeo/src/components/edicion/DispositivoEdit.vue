<template>
    <div class="row">

        <!-- TARJETA 1 -->
        <div class="col-sm-6 mb-3 mb-sm-0">

            <div class="card shadow-sm">

                <div class="card-body">

                    <h5 class="card-title">
                        {{ dispositivo.nombre }}
                    </h5>

                    <p class="card-text">
                        Id: {{ dispositivo.id }}
                    </p>

                    <p class="card-text">
                        Voltaje: {{ dispositivo.voltaje }} V
                    </p>

                    <p class="card-text">
                        Corriente: {{ dispositivo.corriente }} A
                    </p>

                    <p class="card-text">
                        Caudal: {{ dispositivo.caudal }} L/min
                    </p>

                    <a href="#" class="btn btn-primary">
                        Ver más
                    </a>

                </div>

            </div>

        </div>

        <!-- TARJETA 2 -->
        <div class="col-sm-6">

            <div class="card shadow-sm">

                <div class="card-body">

                    <h5 class="card-title">
                        {{ dispositivo2.nombre }}
                    </h5>

                    <p class="card-text">
                        Id: {{ dispositivo2.id }}
                    </p>

                    <p class="card-text">
                        Voltaje: {{ dispositivo2.voltaje }} V
                    </p>

                    <p class="card-text">
                        Corriente: {{ dispositivo2.corriente }} A
                    </p>

                    <p class="card-text">
                        Caudal: {{ dispositivo2.caudal }} L/min
                    </p>

                    <a href="#" class="btn btn-primary">
                        Ver más
                    </a>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'DispositivoEdit',

    data() {
        return {

            dispositivo: {
                id: 1,
                nombre: 'Bomba1Cu',
                descripcion: 'Bomba',
                voltaje:{
                    valor: 220,
                    nominal: 220,
                    minimo: 200,
                    maximo: 240
                },
                corriente:{
                    valor: 15,
                    nominal: 15,
                    minimo: 10,
                    maximo: 20
                },
                caudal:{
                    valor: 120,
                    nominal: 120,
                    minimo: 100,
                    maximo: 140
                }

            },

           

        }
    }
}
</script>