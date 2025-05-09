{
  //OOP - Inheritance

  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hoursOfSleep: number) {
      console.log(`${this.name} sleep everyday for ${hoursOfSleep} hours.`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Mahdi", 30, "Bangladesh");
  student1.getSleep(3);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(classCount: number) {
      console.log(`Everyday ${this.name} takes ${classCount} classes.`);
    }
  }


  const teacher = new Teacher('Mahdi Hasan', 50, 'Bangladesh', 'Professor');
  teacher.takeClass(3);

}
