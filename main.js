//en pinturerias Don Pepe somos tan amable que le preguntamos el nombre a todos nuestros clientes para darles la bienvenida 😁
//funcion de debes colocar un nombre para proseguir, evita dato null.
const buenNombre = ()=>{
    let nombre = prompt("Buenas tardes. ¿Cúal es su nombre?")
    if (nombre != null){
        return nombre;
    }else {
        return buenNombre()
    }
}
let nombre = buenNombre()

let comprar = confirm(`Bienvenido a pinturerías Don Pepe estiamd@ ${nombre}.\n¿Deseas realizar una comprar?`);

// en pinturerias Don Pepe tenemos la mayor diversidad de colores del país, aqui los declaramos.
const colorrojo = "rojo";
const coloramarillo = "amarillo";
const colorverde = "verde";
const colorazul = "azul";
const colornegro = "negro";
const colorblanco = "blanco";
const colorpurpura = "purpura";

var total = 0;

// aqui declaramos la funcion COMPRA DE PINTURA, donde se encuentra la seleccion de Marca, Color y de cuanto pagaraXLitros, puede seleccionar los que usted desee. En Pinturerias Don Pepe lo tenemos!
//esta funcion tambien tiene un parametro (num1) con la cual le ponemos un orden a las compras que va realizando
function comprarPintura(num1){
    // aqui declaramos la funcion para seleccionar la MARCA
    const selecionarMarca = ()=>{
        const colorete = "a";
        const colorshu = "b";
        const dicolor = "c";
        let marcaLower = prompt("¿Qué marca de pintura desea? Seleccione el numero \n Selecciona la letra que corresponda: \n A - Colorete - $9000 el litro IVA no incluido. \n B - Colorshu - $11200 el litro IVA no incluido. \n C - Dicolor - $13500 el litro IVA no incluido.");
        let marca = marcaLower.toLocaleLowerCase();
        if (marca == colorete){
            return "Colorete";
        }else if (marca == colorshu){
            return "Colorshu";
            }else if (marca == dicolor){
                return "Dicolor";
                }else{
                    alert("No contamos con esa marca");
                    return selecionarMarca();
                }
    };
    // aqui declaramos la funcion de seleccion de COLOR
    const selecionarColor = ()=>{
        let colorLower = prompt(`${marca}\n¿Cuál color deseas?\nColores disponibles: rojo, amarillo, verde, azul, negro, blanco, y purpura`);
        let color = colorLower.toLocaleLowerCase();
        if ((color === colornegro) || (color === coloramarillo) || (color ===colorazul) || (color ===colorblanco) || (color === colorpurpura) || (color === colorrojo) || (color === colorverde)){
        return color;
            }else {
                alert("Ese color no está disponible");
                return selecionarColor();
            }
    };
    //aqui declaramos la funcion de cuanto pagara por los LITROS QUE ESTA COMPRANDO, el precioxlitro de estos varia segun la MARCA. No lo olvide, en Don Pepe tenemos los precios mas bajo del mercado 👌.
    const pagaraPorLitro = ()=>{
        if (marca==="Colorete"){
            let pagara = litros*9000;
            return pagara;
            }else if (marca==="Colorshu"){
                let pagara = litros*11200;
                return pagara;
                }else if (marca==="Dicolor"){
                    let pagara = litros*13500;
                    return pagara;
                }
    };

    //llamamos a las funciones de  seleccion de marca, color y cuanto de pagaraxlitro
    let marca = selecionarMarca();
    let color = selecionarColor();
    function litrosCorrec () {
        let litros = Number(prompt(`${marca} - ${color}\n¿Cuántos litros necesita?`));
        return litros;
    }
    let litros = litrosCorrec()
    //bucle para evitar return de datos NaN
    while(isNaN(litros)){
        litros = litrosCorrec();
    }
    
    let pagaraXLitro = pagaraPorLitro();
    total = total + pagaraXLitro;
    let compraste = `${num1} Marca: ${marca} - Color: ${color} - Litros: ${litros} - Subtotal: $${pagaraXLitro}\n\nTotal: $${total} sin IVA incluido`
    //Nuestra funcion retorna un string con todos los datos recolectados
    return compraste;
};

//Aqui declaramos una funcion donde tenemos un bucle "for", solo pueden hacer "4" pedidos, estos sirve para que nuestros clietes no nos vacien los depositos por nuestros precios inmejorables. 
//Tambien esta funcion con un bucle "for" le da el parametro a nuestra funcion "comprarPintura"
function bucleDeCompra () {
    for(let i=1; ((i<=4) && (comprar==true)); i++){
        //aqui llamamos a nuestra funcion estrella compraPintura donde "i" es el parametro
        let estasComprando = comprarPintura(`${i}:`);
        alert(estasComprando);
        //este console.log nos va imprimiendo en consola toda la orden de nuestr@ client@
        console.log (estasComprando)
        comprar = confirm("¿Queres seguir comprando?");
        };
};

//En pinturerias Don Pepe tenemos todo en regla aca estan las funciones del IVA. Solicite su ticket!😉
const iva = ()=>{
    let aPagarDeIva = (total*0.21);
    return aPagarDeIva;
}

const masIva = ()=> {
    let totalMasIva = (total + iva());
    return totalMasIva;
}


if (comprar==true){
    bucleDeCompra();
    let apagarIva = iva();
    let totalAPagarMasIva = masIva()
    if(comprar==true){
        //si el bucle llega a los "4" pedidos salta el alerta de llegaste al limite y finaliza la compra
        alert(`Subtotal a pagar: $${total}\nIVA a pagar: $${apagarIva}\nTOTAL: $${totalAPagarMasIva}\n\n¡Llegaste al limite de compra ${nombre} para este pedido!\nPara continuar comprando, realice otro pedido\n\nEstimad@ ${nombre}. ¡GRACIAS POR SU COMPRA!`);
    } else{
        //si el/la clint@ pone en cancelar al preguntarle: "¿Queres seguir comprando?" tira este alert y finaliza la compra
        alert(`Subtotal a pagar: $${total}\nIVA a pagar: $${apagarIva}\nTOTAL: $${totalAPagarMasIva}\n\nEstimad@ ${nombre}. ¡GRACIAS POR SU COMPRA!`);
    }
}

//En pinturerias Don Pepe estaremos mejorando nuestra pagina para que nuestros clientas esten mas a gusto.







// .toLocaleLowerCase
// let color = ["negro", "azul", "marrón", "marron", "gris", "verde", "naranja", "rosa", "púrpura", "purpura", "rojo", "blanco", "amarillo", "turquesa", "borgoña", "lavanda", "magenta", "salmón", "salmon", "cian", "beige", "rosado", "oliva", "lila", "fucsia", "mostaza", "ocre", "trullo", "malva", "ciruela", "melocotón", "meloconton", "violeta"]
                

// let hola = Number(prompt("que edad tenes?"))

// switch(hola){
//     case 18:
//         alert("sos mayor de edad")
//     break;
    
//     case 17:
//         alert("sos menor de edad?")
//     break;
// }


// let ahorrando = true;
// let billetera = 10000;
// let ahorrado = 0;

// while(ahorrando){
//     let meter = Number(prompt(`cuanto dinero quiere ingresar: \n en la billetera tiene: ${billetera} \n ahorrado tiene ${ahorrado}`))
//     if ((meter!==NaN) && (meter<=billetera)){
//         ahorrado = ahorrado+meter
//         billetera = billetera-meter
//     }else{
//         alert("el dato ingresado es erroneo")
//     }
//     ahorrando = confirm("quiere seguir ahorrando")
// }


