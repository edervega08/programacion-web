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
}