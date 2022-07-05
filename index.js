

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





const listaProductos = [
    {
        id: 1 , 
        nombre: `Piedras de equilibrio` ,
        categoria: `Madera`,
        precio: 800,
        stock: 4,
    },
    {
        id: 2 , 
        nombre: `Casita de tela` ,
        categoria: `Tela`,
        precio: 2600,
        stock: 5,
    },
    {
        id: 3 , 
        nombre: `Animales Puna` ,
        categoria: `Madera`,
        precio: 1700,
        stock: 8,
    },
    {
        id: 4 , 
        nombre: `Corona` ,
        categoria: `Tela`,
        precio: 650,
        stock: 7,
    },
]


const listasNombres = listaProductos.map ((producto) => producto.nombre)
const listaPrecios = listaProductos.map ((producto) => producto.precio)

alert("¡BIENVENIDXS A A TIENDA VIRTUAL DE CRÍA SUELTA!")

let siNo = prompt ("A continuacion le detallamos nuestra lista de productos: \n\n"+ listasNombres + "\n\n¿desea conocer el precio de alguno de nuestros productos?\n\n1.Si\n2.No, gracias" )

if (siNo == 1){
    let eleccion = prompt (`¿De cuál?\n\n1. ` + listasNombres[0] + `\n2. ` + listasNombres[1] + `\n3. ` + listasNombres[2] + `\n4. `+ listasNombres[3] + `\n5. De todos los productos`)

        if (eleccion == 1){
            let carrito = prompt (`$` + listaPrecios[0] + `\n¿Agregar al carrito?\n\n1.Si\n2.No`)

            if (carrito == 1 ){  
                alert (listasNombres[0] + ` agregado correctamente`)
            }else{
                alert ("Gracias por visitarnos =)")
            }
        }else if (eleccion == 2){
            prompt (`$` + listaPrecios[1] + `\n¿Agregar al carrito?`)
        }else if (eleccion == 3){
            prompt (`$` + listaPrecios[2] + `\n¿Agregar al carrito?`)
        }else if (eleccion == 4){
            prompt (`$` + listaPrecios[3] + `\n¿Agregar al carrito?`)
        }else if (eleccion == 5){
            prompt (listasNombres[0] + ` $` + listaPrecios[0] + `\n`+ listasNombres[1] + ` $` + listaPrecios[1] + `\n` + listasNombres[2] + ` $` + listaPrecios[2] + `\n` + listasNombres[3] + ` $` + listaPrecios[3])
        }else{
            alert ("Opción inválida")
        }

}else if (siNo == 2){
    alert ("Gracias por visitarnos =)")

}else{
    alert ("Opción inválida")
}

prompt ("¿Desea realizar alguna compra?")


