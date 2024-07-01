import { stringify } from "querystring";

function typeChecker(a:number | string , b:number | string) {
  /* นายณฐพร ไพรินทร์ 660610749 */


  if (typeof a === 'string' &&  typeof b == 'string' )return "I LOVE YOU";
  else if (typeof a === 'number' && typeof b == 'number' ) return a+b;
  else if (typeof a === 'string' && typeof b == 'number' )return "NOT MATCHED";

}

//Test cases
const a1:string = "Jack";
const b1:string  = "Rose";
const a2:number  = 555;
const b2:number  = 100;
const a3:string  = "Jack";
const b3:number  = 100;

console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));

module.exports = typeChecker;
