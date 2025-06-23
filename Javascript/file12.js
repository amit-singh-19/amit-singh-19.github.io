//Spread Operator
let marks = {
    "English": 20,
};

marks = {...marks, "Maths": 50};
marks = {...marks, "Maths": 90};
// console.log(marks);

let students = ['Amit', 'Chirag', 'Tanmay'];
console.log(students)
students = [...students, 'Aashit'];
console.log(students);