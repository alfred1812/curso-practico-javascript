
//sin funcion
const precioOriginal=120;
const descuento=18;

const porcentajePrecioConDescuento=100-descuento;
const precioConDescuento=(precioOriginal*porcentajePrecioConDescuento)/100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

//con funcion

function calculaPrecioDescuento(precio, descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}