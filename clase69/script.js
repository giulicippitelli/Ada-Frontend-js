// Crear una función obtenerIndice que tome como argumento un valor cualquiera y un array 
// y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

const obtenerIndice = (valor, array) => {
    for (i = 0; i < array.length; i++) {
        if ( valor === array[i]) {
            return [i];
         }            
    }
    return '-1'
}
//console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])); // 2
//console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])); // -1

  
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, 
//y devuelva una array con valor repetido cantidad de veces.

const repetir = (valor,numero) => {
    const array = []
    for (i = 0; i < numero; i++) {
        array.push(valor)
        
    }
return array
}

//console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
//console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
//console.log(repetir("html", 0)); // []



// Crear una función sumarImparesHasta que tome como argumento un número y que devuelva la suma de 
//todos los impares empezando desde 0 hasta dicho numero inclusive.
//numero % 2 == 0 par 
const sumarImparesHasta = (numero) => {
    let suma = 0
    for (i=0; i <= numero; i++) {
        if ( i % 2 !== 0) {
            suma = suma + i }
        }
    return suma
}

//console.log(sumarImparesHasta(5)); // 9 (1 + 3 + 5 = 9)
//console.log(sumarImparesHasta(13)); // 49
//console.log(sumarImparesHasta(47)); // 576


// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y 
//que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean
 //números enteros sucesivos descendientes, hasta llegar a 0.


 const crearCuentaRegresiva = ()  => {
     
 }
crearCuentaRegresiva(3); // [3, 2, 1, 0]
crearCuentaRegresiva(5); // [5, 4, 3, 2, 1, 0]