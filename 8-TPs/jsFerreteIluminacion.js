/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad, marca, precio, precioDescuento, ingresos;
    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    precio = cantidad * 35;

    /* A. */
    if (cantidad >= 6) {
        precioDescuento = precio * 0.5;
    } else {
    /* B. */
        if (cantidad == 5 && marca == "ArgentinaLuz") {
            precioDescuento = precio * 0.6;
        } else {
            if (cantidad == 5) {
                precioDescuento = precio * 0.7;
            } else {
    /* C. */
                if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
                    precioDescuento = precio * 0.75;
                } else {
                    if (cantidad == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {
                        precioDescuento = precio * 0.8;
                    } else {
    /* D. */
                        if (cantidad == 3 && marca == "ArgentinaLuz") {
                            precioDescuento = precio * 0.85;
                        } else {
                            if (cantidad == 3 && marca == "FelipeLamparas") {
                                precioDescuento = precio * 0.9;
                            } else {
                                if (cantidad == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {
                                    precioDescuento = precio * 0.95;
                                } else {
                                        precioDescuento = precio;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

if (precioDescuento > 120) {
    ingresos = precioDescuento * 0.1;
    precioDescuento = precioDescuento + ingresos;
    alert("Usted pago " + ingresos + " de IIBB");
}

document.getElementById("precioDescuento").value = precioDescuento;


}
