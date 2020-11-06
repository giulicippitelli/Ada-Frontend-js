  
// - Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// - Mostrar en consola el objeto sobreMi

const sobreMi = {
    nombre: 'Giuliana',
    apellido: 'Cippitelli',
    edad: '25',    
}

//console.table(sobreMi)

  
// - Crear una variable llamada user, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: fullname, email, age
// - Mostrar en consola el objeto user
// - Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

const user = {
    fullName: ' Giuliana Cippitelli',
    email: 'bcjdskbcjds',
    age: '25',
}

//console.log(user);
//console.log(`Hola, mi nombre es ${user.fullName} y tengo ${user.age} años`); 



// Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

var song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
  };
  
  var cancion = {
    titulo: song.title,
    banda: song.bandName,
    duracion: (song.duration / 1000)
};

  
//  console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }


// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

let personas = {
        persona1 :  {
        id: 0,
        nombre: "Ada",
        email: "ejemplo@terra.com",
        telefono: "1029384756"
    },
    persona2 : {
        id: 0,
        nombre: "Ejemplo",
        email: "ejemplo@terra.com",
        telefono: "1029384756"
    },
    persona3 : {
        id: 0,
        nombre: "Ejemplo",
        email: "ejemplo@terra.com",
        telefono: "1029384756"
    },
    persona4 : {
        id: 0,
        nombre: "Ejemplo",
        email: "ejemplo@terra.com",
        telefono: "1029384756"
    },
    persona5 : {
        id: 0,
        nombre: "Ejemplo",
        email: "ejemplo@terra.com",
        telefono: "1029384756"
    },
}

//console.log(personas)

// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
//console.log(personas.persona1.nombre);

// 2. El ID de Grace
//console.log(personas.persona2.id)

// 3. El email de Hedy
//console.log(personas.persona3.email);

// 4. El ID y nombre de Radia
//console.log(personas.persona4.id,personas.persona4.nombre);

// 5. El telefono de Sheryl
//console.log(personas.persona5.telefono);



// Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

var datos1 = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
  };
  
  // codea aca la solucion
 // datos1.telefono = '0192837465',
  //datos1.edad = 29
  // finalmente, mostramos los datos
  //console.log(datos1);
  

  // { id: 1,
  //   nombre: 'Ada',
  //   apellido: 'Lovelace',
  //   email: 'ada.lovelace@gmail.com',
  //   telefono: '0192837465',
  //   edad: 29,
  //   programa: true }

  // Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
  };
  
  // codea aca la solucion
  if (datos1.programa === true) {datos1.lenguajeFavorito = "Javascript"}
  
  // finalmente, mostramos los datos
  //console.log(datos1);
  // { id: 1,
  //   nombre: 'Ada',
  //   apellido: 'Lovelace',
  //   email: 'ada.lovelace@gmail.com',
  //   telefono: '1234567890',
  //   edad: 29,
  //   programa: true,
  //   lenguajeFavorito: 'Javascript' }

  


//6. Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
  };
  
  // codea aca la solucion
  
  // finalmente, mostramos los datos
  console.log(datos);
  // { id: 1,
  //   nombre: 'Ada',
  //   apellido: 'Lovelace',
  //   email: 'ada.lovelace@gmail.com',
  //   telefono: '1234567890',
  //   edad: 29,
  //   programa: true,
  //   lenguajeFavorito: 'Javascript' }
  const agregarlenguaje = (datos1,programa) => {
      if (datos1.programa = true) {
          
      }
  }