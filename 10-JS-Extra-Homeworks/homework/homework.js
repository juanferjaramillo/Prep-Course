// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  arrObj = Object.entries(objeto);
  return arrObj;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  objStr= {};
  for (i=0; i<string.length; i++) {
    if (objStr[string[i]] === undefined) {
      objStr[string[i]] = 1;
    } else {
      objStr[string[i]] ++;
    }
  }
  return objStr;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var sMay='';
  var sMin='';
  
  for (i=0; i<s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <=90) {  //es mayuscula
      sMay += s[i];
    } else {
      sMin += s[i];
    }
  }
  s = sMay + sMin;
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var j=0
  var arr = [''];
  strRev = '';

  for (i=0; i<str.length; i++) { //recorre la frase completa
    if (str[i]===' ') {
      arr[j] += ' ';
      j++; //next en el array
      arr[j] = '';
    } else {
      arr[j] = str[i] + arr[j];
    }
  }
  while (j>=0) {
    strRev = arr[j] + strRev;
    j--;
  }
  return strRev;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numeroRev = '';
  numeroStr = numero.toString()
  for (i=numeroStr.length-1; i>=0; i--) {
    numeroRev += numeroStr[i];
  }
  if (numeroStr === numeroRev) {
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  cadenaNew = cadena.replaceAll('a','');
  cadenaNew = cadenaNew.replaceAll('b','');   
  cadenaNew = cadenaNew.replaceAll('c','');

  return cadenaNew;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var arr2=[];
  for (i=0; i<arr.length; i++) {
    arr2[i] = arr[i].length + arr[i];
  }
  arr2.sort();
  for (i=0;i<arr2.length;i++) {
    arr2[i] = arr2[i].substring(1);
  }
  return arr2;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arreglo3=[];
  var k=0;
  for (i=0; i<arreglo1.length; i++) {
    for (j=0; j<arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arreglo3[k] = arreglo1[i];
        k++;
      }
    }
  }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

