{
  //Polymorphism
  class Person {
    getSleep() {
      console.log(`I take sleep everyday for 8 hours.`);
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log(`As a student I take sleep 7 hours a day.`);
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log(`As a developer usually I take sleep 4 hours a day.`);
    }
  }

  const trackSleepingTime = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  trackSleepingTime(person1);
  trackSleepingTime(person2);
  trackSleepingTime(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    weight: number;
    constructor(height: number, weight: number) {
      super();
      this.height = height;
      this.weight = weight;
    }

    getArea(): number {
      return this.height * this.weight;
    }
  }

  const getShapeSize = (param: Shape) => {
    console.log(param.getArea());
  }

  const instance1 = new Shape();
  const instance2 = new Circle(10);
  const instance3 = new Rectangle(30,20);


  getShapeSize(instance1)
  getShapeSize(instance2)
  getShapeSize(instance3)


}
