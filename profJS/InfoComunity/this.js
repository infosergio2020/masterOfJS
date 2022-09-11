 // this en el scope global
 console.log(`this: ${this}`);

 // this en el scope de una función
 function whoIsThis() {
   return this;
 }

 console.log(`whoIsThis(): ${whoIsThis()}`);

 // this en el scope de una función en strict mode
 function whoIsThisStrict() {
   'use strict';
   return this;
 }

 console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);

 // this en el contexto de un objeto
 const person = {
   name: 'Gabriel',
   saludar: function() {
     console.log(`Hola soy ${this.name}`);
   },
 };

 person.saludar();

 // this cuando sacamos a una función de un objeto
 const accion = person.saludar;
 accion();

 // this en el contexto de una "clase"
 function Person(name) {
   // this = {}
   this.name = name;
 }

 Person.prototype.saludar = function() {
   console.log(`Me llamo ${this.name}`);
 };

 const angela = new Person('Angela');
 angela.saludar();