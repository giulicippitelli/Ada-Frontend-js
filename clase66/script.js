// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion,
// y devuelva true si la persona está habilitada para ver la película o false si no. 
//Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

const puedeVerPelicula = (edad, tieneAutorizacion ) =>   (edad >= 15 || tieneAutorizacion )

/*console.log(puedeVerPelicula(10, true))
console.log(puedeVerPelicula(18, true))
console.log(puedeVerPelicula(10, false))
console.log(puedeVerPelicula(18, false))*/


// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, 
//y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no 
//(si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (valor, minimo, maximo) => (valor >= minimo) && (valor <= maximo)

/*console.log(estaEnRango(2,3,8))
console.log(estaEnRango(5,3,8))
console.log(estaEnRango(10,3,8))
console.log(estaEnRango(8,3,8))*/

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y
//devuelva true si puede avanzar o false si no. Si no se ingresa un color válido,
// debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (colorSemaforo) => {
        switch(colorSemaforo) {
            case 'rojo' : return false;
            case  'amarillo' : return false;
            case 'verde' : return true;   
            default: return 'Error: color de semáforo inválido ';  
        }
}

/*console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'*/


  
/*Crear una función esVocal que tome como argumento un string letra y 
devuelva true si letra es una vocal o false si no lo es.*/

const esVocal = (letra) => /[aeiou]/g.test(letra);

/*console.log(esVocal('a')); 
console.log(esVocal('n'));
console.log(esVocal('e'));
console.log(esVocal('f'));
console.log(esVocal('u'));
console.log(esVocal('i'));*/

// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

const esConsonante = (letra) => !/[aeiou]/g.test(letra);

/*console.log(esConsonante('a')); 
console.log(esConsonante('n')); 
console.log(esConsonante('i'));
console.log(esConsonante('e'));
console.log(esConsonante('r'));*/

/*Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos,
 y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. 
 Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos*/

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => (pasoTests && !tieneMultasImpagas && pagoImpuestos)

/*console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))  // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false*/

/* Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada,
 y devuelva true si una persona puede gruadarse o false si no.
  Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.*/
  
  const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => ( asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada == true)

  /*console.log(puedeGraduarse(80, 50, true))  // true
  console.log(puedeGraduarse(80, 50, false)) // false
  console.log(puedeGraduarse(80, 45, true))  // false
  console.log(puedeGraduarse(80, 45, false)) // false
  console.log(puedeGraduarse(65, 50, true)) // false
  console.log(puedeGraduarse(33, 55, false)) // false
  console.log(puedeGraduarse(42, 45, true))  // false
  console.log(puedeGraduarse(28, 45, false)) // false*/

  /*Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par,
   o el string impar si el numero es impar*/

   const esParOImpar = (numero) => (numero % 2 == 0 ? 'Es Par' : 'Es Impar')

/*console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'*/

/* Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo,
 o el string negativo si el numero es negativ*/

 const esPositivoONegativo = (numero=0) => ((numero >0) ? 'Es Positivo' : 'Es Negativo')

 //console.log(esPositivoONegativo(3))  // 'positivo'
 //console.log(esPositivoONegativo(-1)) // 'negativo'


 // Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo,
 // siguiendo el orden: verde -> amarillo -> rojo -> verde

 const avanzarSemaforo = (colorActual) => {
    switch(colorActual) {
        case 'verde' : return 'amarillo';
        case  'rojo' : return 'verde';
        case 'amarillo' : return 'rojo';   
 }
}
/*console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'*/

/*Crear una función obtenerDiasMes que tome como argumento un string mes y 
devuelva un número dependiendo de la cantidad de días que tenga ese mes*/
 
const obtenerDiasMes = (mes) => {
    switch (mes) {
        case 'Enero', 'Marzo', 'Mayo', 'Julio', 'Agosto', 'Octubre', 'Diciembre': return 31;
        case 'Febrero' : return 28;
        case 'Abril', 'Junio', 'Septiembre', 'Noviembre' : return 30;
    }
}
//console.log(obtenerDiasMes("Diciembre")) // 31
//console.log(obtenerDiasMes("Febrero"))   // 29

// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la
// generación a la que pertenece, siguientdo estas reglas:
// Baby boomer	    => 1949-1968
// Generación X	    => 1969-1980
// Millennials	    => 1981-1993
// Generación Z	    => 1994-2010

const obtenerGeneracion = (anioNacimiento) => {
    switch (true) {
        case (anioNacimiento > 1949 && anioNacimiento < 1968) : return 'Baby boomer';
        case (anioNacimiento > 1969 && anioNacimiento < 1980) : return 'Generación X';
        case (anioNacimiento > 1981 && anioNacimiento < 1993) : return 'Millenials';
        case (anioNacimiento > 1994 && anioNacimiento < 2010) : return 'Generacion z';
         }
} 

/*console.log(obtenerGeneracion(1970))
console.log(obtenerGeneracion(2000))
console.log(obtenerGeneracion(1990))
console.log(obtenerGeneracion(1950))*/

// Crear una función obtenerSensacion que tome como argumento un número temperatura y 
//devuelva un string dependiendo de la temperatura, con las siguientes reglas:

//const obtenerSensacion = (temperatura) => {

 

// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!

// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada 
//(piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate).

//const  jugarPiedraPapelTijera = () => {




/*jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!*/



// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12); // 2





