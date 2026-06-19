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
//esta es la que estaba
    /*getDispositivoslLista(){
        return Promise.resolve(this.getDispositivosData())
    }*/
// la de ahorita
    getDispositivoslListaFetch(){
        
        return fetch('http://localhost:8080/dispositivos/read')
            .then(response => response.json())
            
    }
    
}

export default new DSDispositivo();