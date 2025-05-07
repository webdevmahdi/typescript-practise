{
  //

  type Human = {
    phoneNo: string;
    height?: string;
    email?: string;
    name: string;
    age: number;
    tv: string;
  };

  type HumanAge = Pick<Human, "age" | "height">;

  type contactInfo = Omit<Human, "height" | "name" | "age" | "tv">;

  type requiredInfo = Required<Human>

  type optionalInfo = Partial<Human>

  type ReadonlyInfo = Readonly<Human>

  const myObj : ReadonlyInfo = {
    phoneNo: '01766',
    height: '5ft 8"',
    email: 'mahdi@gmail.com',
    name: 'Mahdi',
    age: 30,
    tv: 'Available'
  }
 myObj.name = "Hasan"
  //
}
