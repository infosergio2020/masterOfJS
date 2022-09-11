/**
 * herencia prototipal
 */

function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function () {
    console.log(`Hola soy ${this.name}`);
}

const zelda = new Hero('Zelda');

console.log('Name:', zelda.name);
console.log('Saludar:', zelda.saludar);
console.log(`tostring`,zelda.toString);

console.log(`zelda.hasOwnProperty("name")`,zelda.hasOwnProperty("name"));
console.log(`zelda.hasOwnProperty("saludar")`,zelda.hasOwnProperty("saludar"));
const objPrototypeZelda = Object.getPrototypeOf(zelda);
console.log(objPrototypeZelda == Hero.prototype);
// son el mismo

/**
 * como el lenguaje busca el metodo 
 * cuando hacer zelda.prototype = fight se lo esta asignando
 * lo que hace es buscarlo en la funcion si no existe lo va a buscar en el prototipo
 * 
 * en el caso del toString lo va a buscar hasta encontrarlo en Object.prototype (padre de todos los objects)
 * cuando no esta en Object devuelve undefined o error type
 */