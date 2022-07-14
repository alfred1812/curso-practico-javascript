function ladoCuadrado(lado){
    return lado;
}

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return Math.pow(lado,2);
}

console.group("Cuadrado: ");
console.log("El lado del cuadrado es " + ladoCuadrado);
console.log("El Perimetro del cuadrado es:" + perimetroCuadrado);
console.log("el Area del cuadrado es: " + areaCuadrado);
console.groupEnd();


function altura(ladoA, ladoB, base){
    return Math.sqrt(Math.pow(ladoA, 2) - Math.pow(base, 2));
}

function perimetroTriangulo(ladoA, ladoB, base){
    return ladoA + ladoB + base;
}

function areaTriangulo(altura, base){
    return (base*altura)/2;
}

console.groupEnd();

function radioCirculo(radio){
    return radioCirculo;
}

function diametroCirculo(radio){
    return radio * 2;
}

const pi = Math.PI;
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return pi * diametro;
}

function areaCirculo(radio){
    return pi * Math.pow(radio,2);
}


