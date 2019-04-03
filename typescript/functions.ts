let x = 4;
const add = (n1 : number, n2 : number) : number =>  n1 + n2;




var average = (n1: number, n2: number, f: Function) =>  f(n1,n2)/2;


var avg = average(4,5,(n1, n2) => n1 + n2);

console.log(avg);


var sum = add(4,5);

console.log(sum);


const square = n => n*n;
console.log(square(3));

