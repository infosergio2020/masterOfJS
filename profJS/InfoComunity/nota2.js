  // Closures
      // printColor

      // IIFE
      // (function() {
      //   let color = 'green';

      //   function printColor() {
      //     console.log(color);
      //   }

      //   printColor();
      // })();

      // Funciones que regresan funciones
      // function makeColorPrinter(color) {
      //   let colorMessage = `The color is ${color}`;

      //   return function() {
      //     console.log(colorMessage);
      //   };
      // }

      // let greenColorPrinter = makeColorPrinter('green');
      // console.log(greenColorPrinter());

      // variables "privadas"
      // const counter = {
      //   count: 3,
      // };
      // console.log(counter.count);
      // counter.count = 99;
      // console.log(counter.count);

//la forma correcta de crear variables privadas es la siguiente
//con Closures podemos encapsular variables es muy utilizado en javascript

      function makeCounter(n) {
        let count = n;

        return {
          increase: function() {
            count = count + 1;
          },
          decrease: function() {
            count = count - 1;
          },
          getCount: function() {
            return count;
          },
        };
      }

      let counter = makeCounter(7);

      console.log('The count is:', counter.getCount());
      counter.increase();
      console.log('The count is:', counter.getCount());
      counter.decrease();
      counter.decrease();
      counter.decrease();
      counter.decrease();
      console.log('The count is:', counter.getCount());

      counter.count = 0;
      console.log('The count is:', counter.getCount());