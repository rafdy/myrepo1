
//Zadanie 1
console.log('Zadanie 1');
const pierwszy = 'Hello';
const drugi = 'World';
const razem = `${pierwszy} ${drugi}`;
console.log(razem);

//Zadanie 2
console.log('Zadanie 2');
const multiply = (x, y = 1) => {
  return x * y;
};
console.log(multiply(5, 2));

//Zadanie 3
console.log('Zadanie 3');
const average = (...args) => {
  let suma = 0;args.forEach(arg => suma += arg);return suma / args.length;
};
console.log(average(3, 2, 5));

//Zadanie 4
console.log('Zadanie 4');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [licz1, licz2, licz3, licz4, licz5, licz6, licz7, licz8, licz9] = grades;
console.log(average(licz1, licz2, licz3, licz4, licz5, licz6, licz7, licz8, licz9));

//Zadanie 5
console.log('Zadanie 5');
const dane = [1, 4, 'Iwona', false, 'Nowak'];
const [,, firstName,, lastName] = dane;
console.log(`${firstName} ${lastName}`);
