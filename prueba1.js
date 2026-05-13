class rectangulo{
    constructor(b,a){
        this.base = Number(b);
        this.altura = Number(a);
        this.nombre = "rectangulo";
    }

    area(){
        return this.base * this.altura;
    }

    perimetro(){
        return (2*this.base)+(2*this.altura);
    }

    toString(){
        return JSON.stringify(this);
    }
}


geometria = {

    figuras: [],

    agregarFigura(figura){
        this.figuras.push(figura);
    },

    listarTabla(){
        let tabla = document.getElementById("figuraslista");
        tabla.innerHTML = "";

        this.figuras.forEach((item,index)=>{

            let dimensiones = "-";

           if("base" in item && "altura" in item){
                dimensiones = `Base: ${item.base} | Altura: ${item.altura}`;
            }
            else if("radio" in item){
                dimensiones = `Radio: ${item.radio}`;
            }

            let area = (typeof item.area === "function")
                ? item.area()
                : "-";

            let perimetro = (typeof item.perimetro === "function")
                ? item.perimetro()
                : "-";

            tabla.innerHTML += `
            <tr onclick="mostrarDetalle(${index})">
                <td>${item.nombre}</td>
                <td>${dimensiones}</td>
                <td>${area}</td>
                <td>${perimetro}</td>
            </tr>`;
        });
    }
};

// ===== GUARDAR =====
function guardar(){

    let tipo = document.getElementById('tipofigura').value;
    let nombre = document.getElementById('nombre').value;
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    let diametro = document.getElementById('diametro').value;

  
    if(tipo == "1"){
        let fig = new rectangulo(base,altura);
        fig.nombre = nombre;
        geometria.agregarFigura(fig);
    }

  
    else if(tipo == "2"){
        let fig = {
            base:Number(base),
            altura:Number(altura),
            nombre:nombre,

            area(){
                return (this.base*this.altura)/2;
            },

            perimetro(){
                return this.base + this.altura + Math.sqrt(this.base**2 + this.altura**2);
            },

            toString(){
                return JSON.stringify(this);
            }
        };

        geometria.agregarFigura(fig);
    }


    else if(tipo == "3"){
        let fig = {
            radio:Number(diametro)/2,
            nombre:nombre,

            area(){
                return Math.PI*Math.pow(this.radio,2);
            },

            perimetro(){
                return 2*Math.PI*this.radio;
            },

            toString(){
                return JSON.stringify(this);
            }
        };

        geometria.agregarFigura(fig);
    }

    alert("Figura guardada");
}

function listar(){
    geometria.listarTabla();
}


function mostrarDetalle(index){

    let figura = geometria.figuras[index];

    document.getElementById("tarjeta").innerHTML = `
    <ul>
        <h2>Detalle</h2>
        <li>Nombre: ${figura.nombre}</li>
        <li>Base: ${figura.base ?? "-"}</li>
        <li>Altura: ${figura.altura ?? "-"}</li>
        <li>Radio: ${figura.radio ?? "-"}</li>
        <li>Área: ${figura.area()}</li>
        <li>Perímetro: ${figura.perimetro ? figura.perimetro() : "-"}</li>
    </ul>`;
}