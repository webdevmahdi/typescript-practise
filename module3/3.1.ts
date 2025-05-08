{
    class Animal {
        name: string;
        species: string;
        sound: string;
        constructor(name: string, hello: string, sound: string){
            this.name = name;
            this.species = hello;
            this.sound = sound;
        }
    }

    const dog = new Animal('Kutta', 'Dog', 'ghew ghew');
    dog.species
}