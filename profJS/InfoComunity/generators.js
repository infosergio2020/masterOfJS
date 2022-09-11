/**
 * son funciones que cuando se detienen recuerdan su contexto
 * 
 */

function* simpleGenerator(){
    console.log("generator start");
    yield //la ejecucion llega hasta aca y luego hay que llamar a next
    console.log("generator end");
}

// generador de ids
function* idMaker(){
    let id = 1;
    let reset;
    while(true){
        reset = yield id;
        if(reset){
            id = 1;
        }else{
            id = id + 1;
        }
    }
}

// const gen = simpleGenerator();
//gen.next();//funcion que le dice al generador que continue su ejecucion
//console.log(gen.return());

// const idm = idMaker();

// console.log(idm.next());
// console.log(idm.next());
// console.log(idm.next());
// console.log(idm.next(true));
// console.log(idm.next());

// los generadores se prestan para crear funciones eficientes en memoria
function* fibonacci(){
    let a = 1;
    let b = 1;
    while(true){
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}

const genFibo = fibonacci();
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());
console.log(genFibo.next());

/**
 * Los generadores regresan una función.
   Empiezan suspendidos y se tiene que llamar next para que ejecuten.
   Regresan un value y un boolean done que define si ya terminaron.
   yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.
 */