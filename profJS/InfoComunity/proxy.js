/*
* los proxys en javascript son funciones mediante las 
* cuales podemos interceptar las llamadas
* existen metodos trampa para poder interceptar llamadas
* ej: get
*/

import levenshtein from 'fast-levenshtein';

// console.log(levenshtein.get("Java","Javascript"));

// target es el object que queremos interceptar, y 
// el handler es un object que contiene las trampas (funciones)
const target = {
    red:"Rojo",
    green:"Verde",
    blue:"Azul"
}

const handler = {
    get(obj, prop) {
        
        if(prop in obj){
            return obj[prop]
        }

        const suggestion = Object.keys(obj).find(key => {
            return levenshtein.get(key,prop) <= 3
        })

        if(suggestion){
            console.log(`${prop} no se encontró. Quisiste decir ${suggestion}?`);
        }
        return obj[prop];
    }
}

// lo que hacemos aca es agregar el proxy al object para que cuando 
// se equivoque de propiedad le tire sugerencias

const p = new Proxy(target,handler);

console.log(p.greeee);