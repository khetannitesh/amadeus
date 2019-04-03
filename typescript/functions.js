var x = 4;
var add = function (n1, n2) {
    return n1 + n2;
};
var average = function (n1, n2, f) {
    return f(n1, n2) / 2;
};
var avg = average(4, 5, function (n1, n2) {
    return n1 + n2;
});
console.log(avg);
var sum = add('Hello', 5);
console.log(sum);
