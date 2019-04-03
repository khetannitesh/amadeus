let names : string[] = ['Sam', 'David', 'Mike', 'Nancy'];

names.push('Teal');
let lastPerson = names.pop();

console.log(names, lastPerson);

let newArray = names.map( e => e + '-x');

console.log(newArray);

let students = [
    {name: 'Mike', age: 22, gender: 'M'},
    {name: 'Sam', age: 26, gender: 'M'},
    {name: 'Nancy', age: 32, gender: 'F'},
    {name: 'Teal', age: 22, gender: 'F'},
    {name: 'David', age: 22, gender: 'M'},
];

let maleStudents = students
    .filter(e => e.gender == 'M')
    .map(e => e.name)
    .reduce( (res, e) => res + ', ' + e);

console.log(maleStudents);

let femalesWithAgeMoreThan30 = students
    .filter(e => e.gender == 'F' && e.age >=30)
    .map(e => e.name);

console.log(femalesWithAgeMoreThan30);

// students.forEach(e => e.name = e.name + '-x');
// console.log(students);

let numbers = [22,33,55,-1,44];
let s = numbers.reduce( (res, e) => res + e, 0);
console.log(s);
let p = numbers.reduce( (res,e) => res*e, 1);








