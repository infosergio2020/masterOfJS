//objeto

// const heroMethods = {
//     saludar: function () {
//         console.log(`Hola soy ${this.name}`);
//     }
// }


// function Hero(name) {
//     const hero = {
//         name: name,
//     };
//     hero.saludar = heroMethods.saludar;

//     return hero;
// }


// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();

// function Hero(name) {
//     const hero = Object.create(heroMethods);//toda las prop de heroMethods pasan a ser de hero
//     hero.name = name;
//     return hero;
// }

// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();

// function Hero(name) {
//     // const hero = Object.create(heroMethods);//toda las prop de heroMethods pasan a ser de hero
//     const hero = Object.create(Hero.prototype);
//     hero.name = name;
//     return hero;
// }

// Hero.prototype.saludar = function () {
//     console.log(`Hola soy SuperHeroe ${this.name}`);
// }

// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();


/**
 object create lo que hace va mas alla de copiar propiedades de un objeto nuevo
 a otro ademas hay herencia prototipal
 */

 
 /**
  * kewword llamado new es solo sugar sintax
  * tiene que ver con object create
  * cuando uses new se va a crear un atajo a los que es Object.create
  * va a tomar como parametro el prototype si despues del new dice
  * hero entonces es hero.prototype lo que va a estar en el constructor
  * y se lo va asignar a this 
  * 
  * 
  * IMPORTANTE!!!
  * NOTA: new es sugar sintactico de 
  * this = Object.create(xxx.prototype);
  */


function Hero(name) {
    // const hero = Object.create(Hero.prototype);
    hero.name = name;
    return hero;
}

Hero.prototype.saludar = function () {
    console.log(`Hola soy SuperHeroe ${this.name}`);
}

const zelda = new Hero('Zelda');
const link = new Hero('Link');

zelda.saludar();
link.saludar();




