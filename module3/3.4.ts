{
  //

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I just sounds like ${this.species}.`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    barking() {
      console.log(`I am ${this.species} and I always bark.`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log(`I am ${this.species} and I sound always like meaw.`);
    }
  }

  const isDog = (animal: Animal) : animal is Dog =>{
    return animal instanceof Dog;
  }
  const isCat = (animal: Animal) : animal is Cat => {
    return animal instanceof Cat;
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.barking();
    }else if(isCat(animal)){
        animal.makeMeaw()
    }else{
        animal.makeSound()
    }
  };

  const dog = new Dog("Kutta", "dog");
//   dog.barking();

  const cat = new Cat('Bilai', 'Cat');
//   cat.makeMeaw()

  const animalFinder = getAnimal(dog)

  //
}
