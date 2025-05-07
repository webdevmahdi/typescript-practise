{
  // mapped type
  const array: number[] = [1, 2, 3, 5];
  const stringNumbers: string[] = array.map((number) => number.toString());
  console.log(stringNumbers);

  type ArrayOfProperties = {
    home: string;
    bike: string;
    car: string;
    tv: string;
  };
  type PropertiesBooleanType<T> = {
    [key in keyof T] : T[key];
  }

  const properties : PropertiesBooleanType<{home: string; price: number}> = {
    home: 'Home in gulshan',
    price: 40000000
  }


}
