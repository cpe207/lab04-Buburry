function primeNumber(a) {
    /* นายณฐพร ไพรินทร์ 660610749 */
    var z = a;
    if (z > 2) {
        if (z % 2 == 0 || z % 3 == 0 || z % 5 == 0 || z % 7 == 0 ||
            z % 11 == 0 || z % 19 == 0) {
            return 'NO';
        }
        else
            return 'YES';
    }
    else
        return 'YES';
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
