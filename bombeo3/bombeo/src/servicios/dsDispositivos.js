class DSDispositivo{
    getDispositivosData(){
        return[
            {
                id: 0,
                nombre: 'Dispositivo0',
                descripcion: '',
                voltaje: { 
                    nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                    },
                corriente: { 
                    nominal: 120,
                    minimo: 110, 
                    maximo: 300 
                    },
                caudal: { 
                    nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                    }
            }, 
            {
                id: 1,
                nombre: 'Dispositivo1',
                descripcion: '',
                voltaje: { 
                    nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                },
                corriente: { 
                    nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                },
                caudal: { nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                }
            },
            {
                id: 2,
                nombre: 'Dispositivo2',
                descripcion: '',
                voltaje: { 
                    nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                },
                corriente: { 
                    nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                },
                caudal: { nominal: 120, 
                    minimo: 110, 
                    maximo: 300 
                }
            }           
        ]
    }

    getDispositivoslLista(){
        return Promise.resolve(this.getDispositivosData())
    }
}

export default new DSDispositivo();