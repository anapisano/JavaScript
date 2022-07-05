

/* array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"]

for (array in array1){

    if(array == 1){

        for (array of array1){
            document.write ((array[1]) + "<br>")
        }
    }
} 
 */

/* function sumar (num1, num2){
    let suma = num1 + num2;
    return suma
}
let resultado = sumar()

sumar(10,10)

console.log (sumar(10,10)) */

///* la misma funcion que la anterior pero con fecha*///

/* const sumar = (num1, num2) => {
    let suma = num1 + num2;
    return suma
}

console.log (sumar(10,15)) */

/* function seleccionarPersonaje () {
    mipersonaje = prompt ("Elija su personaje: \n Ingrese 1 si quiere que su personaje sea Ramoncito \n Ingrese 2 si quiere que su personaje sea Eduardo \n")
    return mipersonaje
} */

///* entrega complementaria 2*///

/* let cantidad = prompt ("¿Cuántas comidas favoritas tenés?")
let comidasFavoritas = []

for (i = 0; i < cantidad; i++){
    comidasFavoritas [i] = prompt ("Ingresa de a una comida y luego aceptar hasta completar la lista")
}

let lista = prompt("¿Es correcta esta lista?\n "  + comidasFavoritas.join(" - ") + "\n" + "(ingrese si o no)")

if (lista == "si"){
    alert ("le enviaremos una de regalo al azar, luego de que toque aceptar")
        const azar = () => {
            alert ("Su regalo es: " + comidasFavoritas[0])
            return
        }
        azar()
            prompt ("Ingrese su dirección para que le llegue el regalo")
            alert ("Gracias por colaborar con este humilde proyecto")

}else if (lista == "no"){
    alert ("Usted ingresó algo mal porque el código funciona perfectamente")
}else{
    alert ("Vuelva a intentarlo, opción incorrecta")
}
 */


///*PRE-ENTREGA 1*///


class Productos {
    constructor(nombre, precio, tipo, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.stock = stock;
    }
}

listaProducto =[]

const restar = (a, b) => a - b;
const div = (a, b) => a / b;
const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;

listaProducto.push(new Productos(`Piedras de equilibrio`, 800, `madera`, 4));
listaProducto.push(new Productos(`Casita de tela`, 2500, `Tela`, 5));
listaProducto.push(new Productos(`Animales Puna`, 1700, `madera`, 8));
listaProducto.push(new Productos(`Corona`, 650 ,`Tela`,  7));

const listaNombres = listaProducto.map ((producto) => producto.nombre)
const listaPrecios = listaProducto.map ((producto) => producto.precio)
const listaStock = listaProducto.map ((producto) => producto.stock)

let total = 0;
let cantidadProductos = 0;
let carrito = 0;


alert("¡BIENVENIDXS A A TIENDA VIRTUAL DE CRÍA SUELTA!")

function menu(){
    let siNo = prompt ("A continuacion le detallamos nuestra lista de productos: \n\n"+ listaNombres + "\n\n¿desea conocer los precios nuestros productos?\n\n1. Si\n2. No, gracias" )

    if (siNo == 1){
        siNo = prompt (listaNombres[0] + ` $` + listaPrecios[0] + `\n`+ listaNombres[1] + ` $` + listaPrecios[1] + `\n` + listaNombres[2] + ` $` + listaPrecios[2] + `\n` + listaNombres[3] + ` $` + listaPrecios[3] + `\n\n¿Desea agregar algún producto al carrito?\n\n1. Si\n2. No`)
        if (siNo == 1){
            compra()
        }else if (siNo == 2){
            alert ("Gracias por visitarnos =)")
    
        }else{
            alert ("Opción inválida")
        }

    }else if (siNo == 2){
        alert ("Gracias por visitarnos =)")

    }else{
        alert ("Opción inválida")
    }
}

function pago(){
    let pago = parseInt(prompt(`Elija una opcion: \n1. Seguir Comprando\n2. Finalizar compra\n3. Salir`));
    
    if (pago == 1) {
            compra();
    } else if (pago == 2) {
            alert(`su compra es de un total de $${carrito}`);
            let pago = prompt(" ¿Que tipo de pago desea usar? \n1: Efectivo \n2: 3 cuotas sin interes \n3: 6 cuotas con recargo del 10% \n4: 12 cuotas con 20% interes");
        if (pago == 1) {
                alert(`Su total es de $${carrito} \n Te enviaremos al menu principal \n¡Gracias por confiar en Cría Suelta!`)
                menu();
                
        } else if (pago == 2) {
                alert(`Usted opto por 3 cuotas de: \n $${div(carrito, 3)} cada una\n Te enviaremos al menu principal \n¡Gracias por confiar en Cría Suelta!`);
                menu();
                
        } else if (pago == 3) {
                alert(`Usted opto por 6 cuotas de: $${div(sumar(carrito,(multi(carrito, 0.1))), 6)} cada una\n Te enviaremos al menu principal \n¡Gracias por confiar en Cría Suelta!`);
                menu();
                
        } else if (pago == 4) {
                alert(`Usted opto por 12 cuotas de: $${div(sumar(carrito,(multi(carrito, 0.2))), 12)} cada una\n Te enviaremos al menu principal \n¡Gracias por confiar en Cría Suelta!`);
                menu();
                
            }
        }
    
}

function compra(){
    ingreso = prompt (`¿Cuál producto desea agregar?\n1. Piedras de equilibrio \n2. Casita de tela \n3. Animales Puna \n4. Corona \n5: Salir`)
    if (ingreso == 1) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${listaProducto[0].nombre} deseas?`));
        listaProducto[0].stock = restar(listaProducto[0].stock, unidades);
        total = multi(unidades, listaProducto[0].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \nespecificacion del producto :\n${listaProducto[0].nombre}\nmaterial:  ${listaProducto[0].tipo} \ncantidad: ${unidades} \ncarrito: $${carrito}`);

        pago()
        
    } else if (ingreso == 2) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${listaProducto[1].nombre} deseas?`));
        listaProducto[1].stock = restar(listaProducto[1].stock, unidades);
        total = multi(unidades, listaProducto[1].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \nespecificacion del producto :\n${listaProducto[1].nombre}\nmaterial: ${listaProducto[1].tipo} \ncantidad: ${unidades} \ncarrito: $${carrito}`);

        pago()
        
    } else if (ingreso == 3) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${listaProducto[2].nombre} deseas?`));
        listaProducto[2].stock = restar(listaProducto[2].stock, unidades);
        total = multi(unidades, listaProducto[2].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \nespecificacion del producto :\n${listaProducto[2].nombre}\nmaterial: ${listaProducto[2].tipo} \ncantidad: ${unidades} \ncarrito: $${carrito}`);

        pago()
    
    } else if (ingreso == 4) {
        unidades = parseInt(prompt(`¿Cuantas unidades de ${listaProducto[3].nombre} deseas?`));
        listaProducto[3].stock = restar(listaProducto[3].stock, unidades);
        total = multi(unidades, listaProducto[3].precio);
        carrito = sumar(carrito, total);
        alert(` Su compra es de $${total} \nespecificacion del producto :\n${listaProducto[3].nombre}\nmaterial: ${listaProducto[3].tipo} \ncantidad: ${unidades} \ncarrito: $${carrito}`);

        pago()
    }else {
        alert ("Opción inválida")
    }
}

menu()

