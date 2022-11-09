// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var resp = array[0];
  return (resp);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var resp = array[array.length-1];
  return (resp);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var resp = array.length;
  return (resp);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var resp = [];
  for (let i=0; i<array.length; i++) {
    resp[i]=array[i]+1;
  }
  return (resp);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var resp = array;
  resp.push(elemento);
  return (resp);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var resp = array;
  resp.unshift(elemento);
  return (resp);  
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var resp = palabras[0];
  for (i=1;i<palabras.length; i++) {
    resp = resp + " " + palabras[i];
  }
  return (resp);
}

//------------CHECK THIS--------------------------

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var resp = false
  for (let i=0;i<array.length; i++) {
    //resp = (elemento === array[i]);
    if (elemento === array[i]) {
      resp = true;
    }
  }
  return (resp);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resp = 0;
  for (i=0;i<numeros.length; i++) {
    resp = resp + numeros[i];
}
return (resp);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resp = 0;
  for (i=0;i<resultadosTest.length; i++) {
    resp = resp + resultadosTest[i];
}
return (resp / resultadosTest.length);  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var resp = numeros[0];
  for (i=1;i<numeros.length; i++) {
    if (resp < numeros[i]) {resp = numeros[i];}
    }
  return (resp);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resp = 1;
  if (arguments.length === 0) {
    resp = 0;
  } else {
      for (i=0;i<arguments.length; i++) {
        resp =  resp * arguments[i];
      }
    }
  return (resp);  
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var resp = 0;
  for (i=0;i<arreglo.length; i++) {
    if (arreglo[i] > 18) {resp++;}
  }
  return(resp);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var resp='Es dia Laboral' ;
  if (numeroDeDia === 1 || numeroDeDia === 7) {resp='Es fin de semana';}
  return(resp);
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var resp = n.toString();
  if (resp[0] === '9') {return true;}
  else {return false;}
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var resp = true;
   for (i=1;i<arreglo.length; i++) {
   if (arreglo[i-1]!==arreglo[i]) {resp=false;} 
  }
  return(resp);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var resp = [];
  var cnt = 0;
  for (i=0;i<array.length; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      resp[cnt]=array[i];
      cnt++;
    }
  }
  if (cnt<3) {
    return ('No se encontraron los meses pedidos');
  }
  return (resp);
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var resp = [];
  var cnt = 0;
  for (i=0;i<array.length; i++) {
    if (array[i]>100) {
      resp[cnt] = array[i];
      cnt++;
    }
  }
  return(resp);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var resp = [];
  for (i=0;i<10;i++){
    numero = numero + 2;
    resp[i]=numero;
    if (i===numero) {
      break;
    }
  }
  if (i<10) {
    return('Se interrumpió la ejecución');  
  } else {
    return(resp);
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var resp = [];
  var num = numero;
  for (i=0;i<10;i++){
    if (i===5) {continue;}
    else {
      num = num + 2;
      resp.push(num);  
    } 
  }  
  return(resp);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
