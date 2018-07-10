function mostrar()
{
    var precio, precioConDesc, precioDesc, precioF;
    var descuento, porcentaje, iva;
    precio = prompt("Ingrese el precio");
    descuento = prompt("Ingrese el descuento");
    porcentaje = descuento / 100;
    precioDesc = precio * porcentaje;
    alert("El descuento es: " + precioDesc);
    precioConDesc = precio - precioDesc;
    alert("El precio con descuento es: " + precioConDesc);
    iva = precio * 0.21;
    alert("El IVA es: " + iva);
    alert("El descuento es de " + precioDesc + ", el precio con descuento " + precioConDesc + " y el IVA es " + iva);
    precioF = document.getElementById("elPrecioFinal").value = precioConDesc + iva;

}
