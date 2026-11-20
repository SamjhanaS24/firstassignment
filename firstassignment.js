
// // Task 1: Check positive number

// function checkNumber(num) {
//     if (num > 0) {
//         console.log("Positive number");
//     } else {
//         console.log("Not a positive number");
//     }
// }

// checkNumber(10);
// checkNumber(-5);


// // // Task 2: Find largest number using arrow function

const findLargest = (numbers) => {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
};

// console.log("Largest number:", findLargest([10, 25, 5, 40, 15]));


// // // Task 3: Area of cylinder using object

// // const cylinder = {
// //     radius: 5,
// //     height: 4,

// //     area: function() {
// //         return Math.PI * this.radius * this.radius * this.height;
// //     }
// // };

// // console.log("Cylinder result:", cylinder.area());


// // // Task 4: Area of square and rectangle using common function

// // function calculateArea() {
// //     return this.length * this.breadth;
// // }

// // const square = {
// //     length: 5,
// //     breadth: 5,
// //     area: calculateArea
// // };

// // const rectangle = {
// //     length: 8,
// //     breadth: 4,
// //     area: calculateArea
// // };

// // console.log("Area of Square:", square.area());
// // console.log("Area of Rectangle:", rectangle.area());
