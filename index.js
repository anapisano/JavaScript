

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

/* const personajes = [
    {id: 1 , nombre: 'Ramoncito' , vida: 1000 },
    {id: 2 , nombre: 'Eduardo' , vida: 1200 },
    {id: 3 , nombre: 'Norma' , vida: 950 },
    {id: 4 , nombre: 'Gerardo' , vida: 1150 },
    {id: 5 , nombre: 'Francisca' , vida: 1400 },
]


for (mipersonsaje of personajes){
    
}
 */

///* entrega complementaria 2*///

let cantidad = prompt ("¿Cuántas comidas favoritas tenés?")
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
