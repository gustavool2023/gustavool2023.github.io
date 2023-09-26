/*1.Suma de elementos en un arreglo:
Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
números*/
const numeros = [1, 2, 3, 4, 5];
const suma = sumaElementos(numeros);


function sumaElementos(arreglo) {
   
    const resultado = arreglo.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0); 
    return resultado;
  }
  
  
  console.log(suma); 


  /*2.Multiplicación de elementos en un arreglo:
Crea una función que utilice reduce() para multiplicar todos los elementos de un arreglo de
números.*/
  

 const numeros = [1, 2, 3, 4, 5];
const multiplicacion = sumaElementos(numeros);


function sumaElementos(arreglo) {
   
    const resultado = arreglo.reduce((valorAnterior, valorActual) => {
      return valorAnterior * valorActual;
    }, 1); 
    return resultado;
  }
  
  
  console.log(multiplicacion);

  /*3.Concatenación de cadenas:
Implementa una función que use reduce() para concatenar todos los elementos de un
arreglo de cadenas en una sola cadena*/

const numeros = [1, 2, 3, 4, 5];
const concatena = concatenarElementos(numeros);


function concatenarElementos(arreglo) {
   
    const resultado = arreglo.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual.toString();
    }, ); 
    return resultado;
  }
  
  
  console.log(concatena);

  /*4.Calcular el promedio:
  Escribe una función que use reduce() para calcular el promedio de un arreglo de números.*/


const numeros = [1, 2, 3, 4, 5];
const sumaPromedio = promedioElementos(numeros);


function promedioElementos(arreglo) {
   
    const resultado = arreglo.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0); 
    
    return resultado;
  }
  const promedio = sumaPromedio/numeros.length
  
  console.log(promedio);

  /*5.Encontrar el valor máximo:
Crea una función que utilice reduce() para encontrar el valor máximo en un arreglo de
números.*/

const numeros = [23, 70, 1, 92, 40, 65];
const maximoEncontrado = encontrarMaximo(numeros);

function encontrarMaximo(arreglo) {
  if (arreglo.length === 0) {
    return undefined; }

  const maximo = arreglo.reduce(function (valorAnterior, valorActual) {
    return valorAnterior > valorActual ? valorAnterior : valorActual;
  });

  return maximo;
}



console.log("El valor máximo es:", maximoEncontrado);

/*6.Contar ocurrencias:
Escribe una función que cuente cuántas veces aparece un elemento específico en un
arreglo utilizando reduce().*/


const numeros = [33, 2, 33, 42, 51, 42, 21, 65, 33,33];
const numeroBuscar = 33;


function contarElementos( notas, nota) {
   
    return notas.reduce((valorAnterior, valorActual)=>{
      return valorActual === nota ? valorAnterior + 1 : valorAnterior; 
    }, 0); 
    
    
  }
  const contar = contarElementos(numeros, numeroBuscar);

  console.log( `El numero ${numeroBuscar} aparece ${contar} veces`);



 /* 7. Ordenar palabras por longitud:
Crea una función que ordene un arreglo de palabras por su longitud, es decir, la cantidad de
caracteres*/
const palabras = ["manzana", "pera", "kiwi", "uva", "plátano"];

function ordenarPorLongitud(arr) {
 
  arr.sort(function(a, b) {
    
    return a.length - b.length;
  });

  return arr;
}



const palabrasOrdenadas = ordenarPorLongitud(palabras);
console.log(palabrasOrdenadas);

/*8. Búsqueda de un elemento en un arreglo:
Escribe una función que busque un elemento específico en un arreglo y devuelva true si se
encuentra o false si no se encuentra*/

const elemento = [10, 8, 56, 48, 15];
const buscarElemento = 22;

function buscar( array, valor) {

  return array.includes(valor);
  
}

const busqueda = buscar(elemento, buscarElemento);
console.log(busqueda);



 /*9. Búsqueda de la primera coincidencia:
Implementa una función que busque la primera instancia de un elemento en un arreglo y
devuelva su índice. Si el elemento no está en el arreglo, devuelve -1.*/

const miArreglo = [12, 23, 36, 41, 36];
const elementoBuscado = 36;

function buscarIndice(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i; 
    }
  }
  return -1; 
}




const indice = buscarIndice(miArreglo, elementoBuscado);
if (indice !== -1) {
  console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice} del array ${miArreglo} `);
} else {
  console.log(`El elemento ${elementoBuscado} no se encuentra en el arreglo.`);
}


/*10. Búsqueda de la última coincidencia:
Crea una función que busque la última instancia de un elemento en un arreglo y devuelva
su índice. Si el elemento no está en el arreglo, devuelve -1.*/

const miArreglo = [12, 23, 36, 41, 36];
const elementoBuscado = 36;

function buscarIndice(arr, elemento) {
  for (let i = arr.length-1 ; i > 0 ; i--) {
    if (arr[i] === elemento) { 
       
                
      return i; 
    }
  }
  return -1; 
}




const indice = buscarIndice(miArreglo, elementoBuscado);
if (indice !== -1) {
  console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice} del array ${miArreglo} `);
} else {
  console.log(`El elemento ${elementoBuscado} no se encuentra en el arreglo.`);
}

  