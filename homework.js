
const array = [ 'apple', 'banana', 'orange', 'watermelon', 'pawpaw']

console.log(array);
//  number 1a remove last element

const pop = array.pop()
console.log(array);

//  number 1b replace banana with kiwi

const replaced = array [1]='kiwi'
console.log(array);

 
const person ={

   contact1: {
    name : 'lekan',
    age : 26,
    location : 'united states'
    }
}

// number 2 dot and [] notation

function dotnotation(){
    console.log(person.contact1.name);
    console.log(person ['contact1'] ['age']);
    console.log(person.contact1.location);
}
dotnotation();
console.log(person);


//  number 3 update and update object property


function updateperson(){
   person.contact1.age=25,
   person.contact1.profession = 'developer'
}
updateperson()
console.log(person);


//  4 function to return the value propeerty

function returnValue (){
     console.log(Object.entries (person.contact1));
     
}
returnValue()

// another way
// console.log(person.contact1);
// let objectValue = Object.values(person.contact1)
// console.log(objectValue);

//  5 prevent adding new property but allow updates

function sealObject (){
    person.contact1.age = 30, // this will be updated

    console.log(Object.seal(person.contact1));
    
    person.contact1. complexion= 'chocolate' // this will not be updated    
}
sealObject()


