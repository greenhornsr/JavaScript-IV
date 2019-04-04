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
    demo(subject){
        return `Today we are learning about ${subject}!`
    }
    // Grade method
        // grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}!`
    }
}


// ***************Student Constructor class******************
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
}


