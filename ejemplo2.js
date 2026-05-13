class rectangulo{
    constructor(b, a){
        this.base = b;
        this.altura = a;
        this.nombre = "rectangulo"
    }
    setAltura(a){
        this.altura = a;
    }
    area(){
        return this.base * this.altura;
    }
    perimetro(){
        return (2 * this.base) + (2 * this.altura);
    }
    toString(){
        return JSON.stringify(this);
    }
}
console.log('+++++++ triangulo +++++++++')
triangulo ={base: 10,
    altura: 20,
    nombre: "triangulo",
    setBase(b){
        this.base = b;
    },
    area(){
        return (this.base * this.altura) / 2;
    },
    toString(){
        return JSON.stringify(this); }

  
}
 cuadro = new rectangulo(10, 10,'cuadro')
console.log(cuadro.toString());
console.log(triangulo.toString());

console.log('+++++++ geometria +++++++++')

geometria={
    figuras: [],

    agregarFigura(figura){
        this.figuras.push(figura);
    },

    mostrarFiguras(){
        this.figuras.forEach((figura,indice) => {
            console.log(indice+'->' +figura.toString());
        });
    },

    listahtml(){
        var disp = "";
        this.figuras.forEach((figura,indice) => {
            disp += indice + '->' + figura.toString() + '\n';
        });
        return disp;
    },

    listarTabla(){
        let tabla = document.getElementById("figuraslista");
        tabla.innerHTML = "";

        this.figuras.forEach((item,index)=> {

            tabla.innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${item.nombre}</td>
                <td>${item.toString()}</td>
            </tr>
            `;
        });
    }
};

geometria.agregarFigura(new rectangulo(10, 10,'cuadrado') );
geometria.agregarFigura(new rectangulo(50,20,'triangulo') );
geometria.agregarFigura(triangulo);
geometria.mostrarFiguras();


console.log('+++++++ circulo+++++++++')
circulo = {
    radio: 10,
    nombre: "circulo",
    area(){
        return Math.PI * Math.pow(this.radio,2);
    },
    perimetro(){
        return 2 * Math.PI * this.radio;
    },
    toString(){
        return JSON.stringify(this);
    }
}
geometria.agregarFigura(circulo);
geometria.mostrarFiguras();

function addFigura(){
    let tipo = document.getElementById('tipo');
    let nombre = document.getElementById('nombre');
    let base = document.getElementById('base');
    let altura = document.getElementById('altura');
    let diametro = document.getElementById('diametro');
    if(tipo.value==='rectangulo'){
        geometria.agregarFigura(new rectangulo(base.value,altura.value,nombre.value))
    }
   
    
}