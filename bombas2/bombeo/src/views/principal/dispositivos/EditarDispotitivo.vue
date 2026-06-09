<template>
    <div class="container mt-4">

        <div class="card shadow-sm border-0 rounded-4 w-75 mx-auto">

            <div class="card-body p-4">

                <h3 class="text-primary fw-bold mb-1">
                    Editar Dispositivo
                </h3>

                <p class="text-muted mb-4">
                    Formulario para registrar y editar dispositivos.
                </p>

                <form>

                    <div class="row g-3">

                        <!-- id -->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">
                                Id
                            </label>

                            <input
                                type="text"
                                v-model="dispositivo.id"
                                class="form-control"
                            >
                        </div>

                        <!-- nombre-->
                        <div class="col-md-6">
                            <label class="form-label fw-semibold">
                                Nombre
                            </label>

                            <input
                                type="text"
                                v-model="dispositivo.nombre"
                                class="form-control"
                            >
                        </div>

                        <!-- descripciom -->
                        <div class="col-md-12">
                            <label class="form-label fw-semibold">
                                Descripción
                            </label>

                            <textarea
                                v-model="dispositivo.descripcion"
                                rows="3"
                                class="form-control"
                            ></textarea>
                        </div>

                        <!-- voltaje -->
                        <div class="col-12 mt-3">
                            <h5 class="titulo-seccion">
                                Voltaje
                            </h5>
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Valor
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.voltaje.valor"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Nominal
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.voltaje.nominal"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Mínimo
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.voltaje.minimo"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Máximo
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.voltaje.maximo"
                                class="form-control"
                            >
                        </div>

                        <!-- CORRIENTE -->
                        <div class="col-12 mt-3">
                            <h5 class="titulo-seccion">
                                Corriente
                            </h5>
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Valor
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.corriente.valor"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Nominal
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.corriente.nominal"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Mínimo
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.corriente.minimo"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Máximo
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.corriente.maximo"
                                class="form-control"
                            >
                        </div>

                        <!-- CAUDAL -->
                        <div class="col-12 mt-3">
                            <h5 class="titulo-seccion">
                                Caudal
                            </h5>
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Valor
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.caudal.valor"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Nominal
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.caudal.nominal"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Mínimo
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.caudal.minimo"
                                class="form-control"
                            >
                        </div>

                        <div class="col-md-3">
                            <label class="form-label">
                                Máximo
                            </label>

                            <input
                                type="number"
                                v-model="dispositivo.caudal.maximo"
                                class="form-control"
                            >
                        </div>

                        <!-- BOTONES -->
                        <div class="col-12 mt-4">

                            <button
                                type="button"
                                class="btn btn-primary me-2"
                            >
                                Guardar
                            </button>

                            <button
                                type="reset"
                                class="btn btn-secondary"
                            >
                                Cancelar
                            </button>

                        </div>

                    </div>

                </form>

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
    background-color: rgb(103, 231, 225);
}

.titulo-seccion{
    color: red;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 5px;
}

</style>