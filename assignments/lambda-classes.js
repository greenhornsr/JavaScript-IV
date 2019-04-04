// CODE here for your Lambda Classes


//  **************Person Constructor class******************
class Person {
    constructor(pAttributes){
        this.name = pAttributes.name;
        this. age = pAttributes.age;
        this.location = pAttributes.location;
        this.gender = pAttributes.gender
    }
    // Methods
    // Speak method
        // This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`
    }
}


// ------------ New Person Objects -----------------
const tom = new Person({
    name: "Tom",
    age: 22,
    location: "Sacramento",
    gender: "M"
})

const sally = new Person({
    name: "Sally",
    age: 21,
    location: "Boston",
    gender: "F"
})

// Test Console Logs
// /*
console.log("__________________________LAMBDA CLASS LOGS BEGIN____________________________")
// Tom
console.log("--------------THESE ARE MY PERSON LOGS FOR Tom--------------");
console.log(tom);
console.log(tom.speak());

// Sally
console.log("--------------THESE ARE MY PERSON LOGS FOR Sally--------------");
console.log(sally);
console.log(sally.speak());
// */


// ***************Instructor Constructor class; child to Person******************
class Instructor extends Person{
    constructor(iAttributes){
        super(iAttributes);
        this.specialty = iAttributes.specialty;
        this.favLanguage = iAttributes.favLanguage;
        this.catchPhrase = iAttributes.catchPhrase;
    }
    // Methods
    // Demo method
        // demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    demo(subject = " "){
        return `Today we are learning about ${subject}!`
    }
    // Grade method
        // grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    grade(student, subject = " "){
        return `${student} receives a perfect score on ${subject}!`
    }
}


// ------------ New Instructor Objects -----------------
const instructorMilang = new Instructor({
    name: "Milang",
    age: 45,
    location: "Seattle",
    gender: "F",
    specialty: "Back-End",
    favLanguage: "Python",
    catchPhrase: "Once you go Back, you will never go back!"
})

const instructorDave = new Instructor({
    name: "Dave",
    age: 39,
    location: "Auburn",
    gender: "M",
    specialty: "Front-End",
    favLanguage: "JavaScript",
    catchPhrase: "Only YOU can prevent front-end fires!"
})

// Test Console Logs
// /*
// Milang
console.log("--------------THESE ARE MY INSTRUCTOR LOGS FOR MILANG--------------");
console.log(instructorMilang);
console.log(instructorMilang.speak());
console.log(instructorMilang.demo("Science"));
console.log(instructorMilang.grade(tom.name, "Math"));

// Dave
console.log("--------------THESE ARE MY INSTRUCTOR LOGS FOR DAVE--------------");
console.log(instructorDave);
console.log(instructorDave.speak());
console.log(instructorDave.demo("Robotics"));
console.log(instructorDave.grade(sally.name, "Computer Science"));
// */




// ***************Student Constructor class******************
// /*
class Student extends Person{
    constructor(sAttributes){
        super(sAttributes);
        this. previousBackground = sAttributes.previousBackground;
        this.className = sAttributes.className;
        this.favSubjects = sAttributes.favSubjects
    }
    // Methods
    // List Subjects method
        // listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
    listsSubjects(favSub1, favSub2, favSub3){
        return `${this.name}'s 3 favorite subjects are ${favSub1}, ${favSub2}, and ${favSub3}.`
    }
    // PRAssignment method
        // PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    // SprintChallenge method
        // sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    sprintChallenge(subject = " "){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

// ------------ New Student Objects -----------------
const studentRon = new Student({
    name: "Ron",
    age: 20,
    location: "Denver",
    gender: "M",
    previousBackground: "Rid'in the Totally Awesome waves of Colorado",
    className: "CS101",
    favSubjects: [
        'Html', 
        'CSS',
        'JavaScript'
    ]
})

const studentLiz = new Student({
    name: "Liz",
    age: 18,
    location: "Baltimore",
    gender: "F",
    previousBackground: "Dedicated study for a Masters in Business while raising a family and working full time!",
    className: "CS180",
    favSubjects: [
        'Psychology', 
        'Business Management',
        'Swift'
    ]
})

// Test Console Logs
// /*
// RON
console.log("--------------THESE ARE MY STUDENT LOGS FOR RON--------------")
console.log(studentRon);
console.log(studentRon.speak());
console.log(studentRon.listsSubjects(...studentRon.favSubjects));
console.log(studentRon.PRAssignment(studentRon.favSubjects[1]));
console.log(studentRon.sprintChallenge(studentRon.favSubjects[2]));
// Liz
console.log("--------------THESE ARE MY STUDENT LOGS FOR LIZ--------------")
console.log(studentLiz);
console.log(studentLiz.speak());
console.log(studentLiz.listsSubjects(...studentLiz.favSubjects));
console.log(studentLiz.PRAssignment(studentLiz.favSubjects[0]));
console.log(studentLiz.sprintChallenge(studentLiz.favSubjects[2]));
// */




// ***************Project Manager Constructor class******************

class ProjectManagers extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    // Methods
    // standup method
        // standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    standup(slackchan){
        return `Project Manager ${this.name} announces to the BEST cohort ${slackchan}, @channel standy times!`
    }
    // debugsCode method
        // debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    debugsCode(student, subject = " "){
        return `PM ${this.name} debugs ${student.name}'s ${subject} code.`
    }
}

// ------------ New Project Manager Objects -----------------
const pmJosh = new ProjectManagers({
    name: "Josh",
    age: 40,
    location: "Moab, Utah",
    gender: "M",
    specialty: "Coding Instruction",
    favLanguage: "C#",
    catchPhrase: "Movin' on Up!",
    gradClassName: "CS1",
    favInstructor: "Milang"
})
const pmJulie = new ProjectManagers({
    name: "Julie",
    age: 30,
    location: "Wyoming",
    gender: "F",
    specialty: "Teaching Ruby",
    favLanguage: "Ruby",
    catchPhrase: "California hello to EVERYBODY!",
    gradClassName: "CS2",
    favInstructor: "Dave"
})



// Test Console Logs
// /*
// JOSH OBJECT TEST LOGS
console.log("--------------THESE ARE MY Project Manager LOGS FOR Josh--------------")
console.log(pmJosh);
console.log(pmJosh.speak());
console.log(pmJosh.demo("C#"));
console.log(pmJosh.grade(tom.name, "Social Studies"));
console.log(pmJosh.standup("WEB19"));
console.log(pmJosh.debugsCode(studentLiz, "JavaScript"));
// JULIE OBJECT TEST LOGS
console.log("--------------THESE ARE MY Project Manager LOGS FOR Julie--------------")
console.log(pmJulie);
console.log(pmJulie.speak());
console.log(pmJulie.demo("Ruby"));
console.log(pmJulie.grade(tom.name, "Binary Code 101"));
console.log(pmJulie.standup("WEB19"));
console.log(pmJulie.debugsCode(studentRon, "CSS"));
// */



