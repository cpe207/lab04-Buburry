function primeNumber(a:number):string {
  /* นายณฐพร ไพรินทร์ 660610749 */
  let z:number = a;
  if (z > 2 ){
  if (
    z % 2 == 0 || z % 3 == 0 || z % 5 == 0 || z % 7 == 0 ||
    z % 11 == 0 || z % 19 == 0 
    ) {
    return 'NO';
  } else return 'YES';
} else return 'YES';

}

const d1:number = 10;
const d2:number = 29;
const d3:number = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
