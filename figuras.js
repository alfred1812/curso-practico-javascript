const ladoCuadrado=5;
const perimetroCuadrado=ladoCuadrado*4;
const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.group("Cuadrado: ");
console.log("El lado del cuadrado es "+ladoCuadrado);
console.log("El Perimetro del cuadrado es:"+perimetroCuadrado);
console.log("el Area del cuadrado es: "+areaCuadrado);
console.groupEnd();


const ladoA=6;
const ladoB=6;
const base=4;
const altura=Math.sqrt(Math.pow(ladoA,2)-Math.pow(base,2));
const perimetroTriangulo=ladoA+ladoB+base;
//const perimetroTriangulo=ladoA*4;
const areaTriangulo=(base*altura)/2;
console.group("Triangulo: ");
console.log("Los lados del triangulo son LadoA="+ladoA+", LadoB=" +ladoB+" y Base="+base);
console.log("Altura " +altura);
console.log("El Perimetro del Triangulo es:"+perimetroTriangulo);
console.log("El Area del Triangulo es: "+areaTriangulo);
console.groupEnd();


const radioCirculo=4;
const diametroCirculo=radioCirculo*2;
const pi=Math.PI;
const perimetroCirculo=2*pi*radioCirculo;
const areaCirculo=pi*Math.pow(radioCirculo,2)
console.group("Circulo: ");
console.log("El valor del Radio es es: "+radioCirculo);
console.log("El valor del diametro es: "+diametroCirculo);
console.log("El valor de PI es: "+pi);
console.log("El Perimetro del Circulo es: "+perimetroCirculo);
console.log("El Area del Circulo es: "+areaCirculo);
console.groupEnd();