var a = 1;
console.log(a++); //1 post incremento
console.log(a); //2 

var b = 1;
console.log(++b); //2 pre incremento
console.log(b); //2



console.log("1 a vale:" + a);
var b = ++a;
a++; // post incremento
++a; // pre incremento
console.log("2 a vale:" + a);
a+=2;
console.log("3 a vale:" + a);
