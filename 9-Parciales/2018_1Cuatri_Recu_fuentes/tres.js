function mostrar()
{
    var precio = prompt("Ingrese el precio");
    var desc = prompt("Ingrese el porcentaje de descuento");
    var precioConDesc;
    var precioFinal;

    desc = precio * (desc / 100);
    precioConDesc = precio - desc;
    iva = precio * 0.21;

    alert("El descuento es de " + desc + ", el precio con descuento es " + precioConDesc + " y el IVA es " + iva);

    precioFinal = document.getElementById("elPrecioFinal").value = precioConDesc + iva;


}
