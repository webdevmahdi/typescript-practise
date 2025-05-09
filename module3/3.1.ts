{
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    defaultNature() {
      console.log(`The ${this.name} sound's like ${this.sound}.`);
    }
  }

  const dog = new Animal("Kutta", "Dog", "ghew ghew");
  const cat = new Animal("Persian cat", "Cat", "Meaw meaw");
  cat.defaultNature();
  dog.defaultNature();
}
