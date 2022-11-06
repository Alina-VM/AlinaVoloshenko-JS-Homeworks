//task1 
// function propsCount(currentObject){
//     return Object.keys(currentObject).length;
// }

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development"
// };
// console.log(propsCount(mentor));

//task2
// let user = {
//     name: 'Alisa',
//     course: 'JS fundamental',
//     level: 5,
//     age: 33,
//     city: 'Kyiv'
// }
// function showProps(obj) {
//     let arrKeys = [];
//     let arrProp = [];
//     for (let k in obj) {
//         arrKeys.push(k);
//         arrProp.push(obj[k]);
//     }
//     console.log(arrKeys, arrProp);
// }
// showProps(user);

//task3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//         return this.name + ' '+ this.surname
//     }
// }
// let person = new Person ('Alina', 'Voloshenko')
// person.showFullName();

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(midleName) {
//         return this.surname + ' '+ this.name + ' '+ midleName
//     }
//     showCourse() {
//         let nowYear = new Date().getFullYear();
//         let course = nowYear - this.year;
//         return 'Current course: ' + course
//     }
// }
// let student = new Student('Alina', 'Voloshenko', 2018);
// console.log(student.showFullName('Sergiivna'));
// console.log(student.showCourse());

//task4
// class Worker {
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     showSalary() {
//         return this.dayRate*this.workingDays
//     }
//     showSalaryWithExperience() {
//         return this.showSalary()*this.#experience
//     }
//     get showExp() {
//         return this.#experience 
//     }
//     set setExp(value) {
//         this.#experience = value;
//     }
// }
// let worker1 = new Worker("John Johnson", 20, 23);
// worker1.showSalary();
// console.log(worker1.fullName);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());

// let worker2 = new Worker("Tom Tomson", 48, 22);
// worker2.showSalary();
// console.log(worker2.fullName);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());

// let worker3 = new Worker("Andy Ander", 29, 23);
// worker3.showSalary();
// console.log(worker3.fullName);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

// let workers = [worker1, worker2, worker3];

// function sortWorkersBySalary(workers) {
//     workers.sort(function(a,b){
//         return a.showSalaryWithExperience() - b.showSalaryWithExperience();
//     });
//     return workers
// }
// function showWorkersList(workers) {
//     console.log('Sorted salary: ');
//     for (let i = 0; i < workers.length; i++) {
//         console.log(workers[i].fullName + ': '+ workers[i].showSalaryWithExperience())
//     }
// }
// showWorkersList(workers);

//task5

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5*this.base*this.height;
    }
}
class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
}
class Circle extends GeometricFigure {
    constructor (radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI* Math.pow(this.radius, 2);
    }
}

let triangle = new Triangle(4, 5);
triangle.getArea();
console.log(triangle.getArea());

let square = new Square(7);
square.getArea();
console.log(square.getArea());

let circle = new Circle(5);
circle.getArea();
console.log(circle.getArea());

let figures = [triangle, square, circle];

function handleFigures(figures) {
    let arr = [];
    for (let i of figures) {
        if (i instanceof GeometricFigure) {
            console.log('Geometric figure: ' + i.constructor.name + ' area - ' + i.getArea());
        }
        arr.push(i.getArea());
    }
    let total = arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    console.log(total);
}
handleFigures(figures);