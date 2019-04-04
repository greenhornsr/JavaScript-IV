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
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`
    }
}

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
/*
console.log(tom);
console.log(tom.speak());
console.log(sally);
console.log(sally.speak());
*/


// ***************Instructor Constructor class; child to Person******************
// /*
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

const InstructorMilang = new Instructor({
    name: "Milang",
    age: 45,
    location: "Seattle",
    gender: "F",
    specialty: "Back-End",
    favLanguage: "Python",
    catchPhrase: "Once you go Back, you will never go back!"
})

const InstructorDave = new Instructor({
    name: "Dave",
    age: 39,
    location: "Auburn",
    gender: "M",
    specialty: "Front-End",
    favLanguage: "JavaScript",
    catchPhrase: "Only YOU can prevent front-end fires!"
})

// Test Console Logs
/*
console.log(InstructorMilang);
console.log(InstructorMilang.demo("Science"));
console.log(InstructorMilang.grade(tom.name, "Math"));
console.log(InstructorDave);
console.log(InstructorDave.demo("Robotics"));
console.log(InstructorDave.grade(sally.name, "Computer Science"));
*/


// */



// ***************Student Constructor class******************
/*
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
    PRAssignment(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}
*/

