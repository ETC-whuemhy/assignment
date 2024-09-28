// =========Assignment=======

class Person  {
    isAlive = true
    firstName = 'Teddy'
    lastName = 'Emmanuel'
    age  = 20
    skin = 'dark'
    hobbies = ['movies', 'driving', 'swimming']
    isMarried = true
}

class Teacher  extends Person{
    firstName = 'Mr wahab'
    lastName = 'Olatoyinbo'
    age = 35
    isNice = false

    teach (english){
         console.log (`${this.firstName} teaches english really good`);
    }
    
    getName () {
        return (`${this.firstName} ${this.lastName}`)
    }
}

const teacher = new Teacher
console.log(teacher.hobbies);
teacher.teach()
teacher.getName()