var marksHeight = 20; //kg
var marksMass = 5;  //meters

var johnsHeight = 10;
var johnsMass = 30;

var marksBmi = marksMass / (marksHeight * marksHeight);
console.log(marksBmi);
var johnBmi = johnsMass / (johnsHeight * johnsMass)
console.log(johnBmi);

if (marksBmi > johnBmi) {
    console.log('Mark\' Bmi is higher than john\'s.');
} else{
    console.log('john\' Bmi is higher than Marks\'s.');
}

//var higher = marksBmi > johnBmi;
//console.log( 'Is Mark\'s BMI hihger than john\'s? ' + higher);

var firstName = 'john';
var age = 20;

if (age < 13) {
    console.log (firstName + 'is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + 'is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + 'is a young man.');
} else {
    console.log(firstName + 'is a man');
}


//switch operator 
 var job = 'teacher';
 switch (job) {
     case 'teacher':
         console.log(firstName + ' teaches kids how to code.');
         break;
 
     case 'driver':
         console.log(firstName + ' drives an uber in lisbon.');
         break;
      case 'designer':
          console.log(firstName + ' designs beautiful websites.');
          break;
       default:
           console.log(firstName + ' does something else.');      
 } 
 var scoreJohn = (89 + 120 + 103)/3;
 var scoreMike = (116 + 94 + 123)/3;
 var scoreMary = (97 + 134 + 105)/3;
 console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log(' John\'s team wins withs ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log(' Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + 'points ');
} else {
    console.log('There is a draw');
}

//Functions 
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1994);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUnilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + 'years.');
    } else {
        console.log(firstName + 'is already retired.')
    }
}

yearsUnilRetirement(1990, 'john');
yearsUnilRetirement(1948, 'mike');
yearsUnilRetirement(1969, 'jane');

// functions decleration 
//function whatDoYouDo (job, firstName)

//function expression 
var whatDoYouDo = function (job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in lisbon' ;
        case 'designer':
            return firstName + ' designs beautiful websites' ;
        default:
            return firstName + ' does something else' ;
    }
}
console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'jane'));
console.log(whatDoYouDo('retired', 'mark'));

//Initilaze new array 
var names = ['john', 'mark', 'jane'];
var years = new Array(1998, 1999, 1948);

console.log(names[2]);
console.log(names.length);

// mutate array data 
names[1] = 'Ben';
names[names.length] = 'mary';
console.log(names);

//Different data types 
var john = ['john', 'smith', 1998, 'teacher', false];

john.push('blue');
john.unshift('Mr. ');
console.log(john);
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'john is NOT a designer ' : 'john IS a designer ';
console.log(isDesigner);


function tipCalculator (bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [ 124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];


var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];            
console.log(tips, finalValues); 

//Object literal 
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1998,
    family: ['jane', 'mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);


//New object syntax 
var jane = new Object();
jane.firstName ='jane';
jane.birthYear = 1999;
jane['lastName'] = 'smith';
console.log(jane);


//object and methods 
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1998,
    family: ['jane', 'mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthyear;
    }
};
john.calcAge();
console.log(john);


//Test 4 
var john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log ('They have the same BMI')
}

 
            


 /*if (scoreJohn > scoreMike) {
     console.log(' john\'s team wins with ' + scoreJohn + ' points');
 } else if (scoreMike > scoreJohn) {
     console.log(' Mike\'s team wins with' + scoreMike + ' points ');
 } else {
     console.log(' There is a draw');
 } */

 /* Loops and literation*/
/*
 for (var i = 0; i < 10; i++){
     console.log(i);
 }
 // i = 0, 0< 10 true, log i to console, i++
 // i = 1, 1 < 10 true, log i to the console, i++
 //..
 // i = 9, 9 < 10 true, log i to the console, 1++
 // i = 10, 10 < 10 False , exit loop!
//For loop 
 var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
 for (var i = o; i < john.length; i++){
     console.log(john[i]);
 }
// While loop
var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++;
}
*/
// CONTINUE AND BREAK STATEMENT
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
// Looping backward 
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]); 
}

//solution 5 
var john = {
    fullName: 'john smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            //Determine percentage based on tipping rules 
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to the corresponding arrays 
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i =0; i < this.bills.length; i++)
        {
            //Determine percentage based on a tipping rules 
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300){
                percentage = .1;
            } else {
                percentage = .25;
            }
            // Add results to the corresponding arrays 
            this.tips[i] = bill * percentages;
            this.finalValues[i] = bill + bill * percentage;
        }  
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculation 
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
}



///       HOISTING 
function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// Variables
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


// First scoping example 
var a = 'Hello';
first();

function first() {
    var b = 'Hi!';
    Second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Example to show the difference between execution stack and scope chain 
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'john';
    //console.log(c);
    console.log(a+d);
}

// Lecture: The This Keyword 
// console.log(this);
/* 
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/
var john = {
    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();