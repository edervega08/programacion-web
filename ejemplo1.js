
persona={
    nombre:'eder',
    domicilio:{
        calle:'la herreria',
        nuemero:'318',
        colonia:'Campo nubes',
        ciudad:'morelia'
    },
    identificacion:{
        documento:'credencial',
        numero:'1234'
    },
setNombre(nombre){this.nombre=nombre},
setDomicilio(domicilio)
{this.domicilio=domicilio},

toString(){return JSON.stringify(this)}
}

persona1 = Object.assign({}, persona);

console.log("persona.nombre");
console.log(persona.toString())
persona.setNombre('eder')
persona.setDomicilio({calle:'sin calle'})
console.log(persona.toString())
console.log(persona1.toString())
console.log("==========================")

console.log("==========================")
















