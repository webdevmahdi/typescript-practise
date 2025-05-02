{
  //
  //Generic array

  type GenericType<T> = Array<T>;

  const rolls: GenericType<number> = [1, 2, 3];
  const names: GenericType<string> = ["Mahdi", "Hasan", "Mahi"];
  const isStudent: GenericType<boolean> = [true, false, true];

  const parsonDetails: GenericType<{ name: string; age: number }> = [
    {
      name: "Mahdi",
      age: 30,
    },
    {
      name: "Kamal",
      age: 300,
    },
  ];

  //tuple
  type DynamicTuple<X, Y> = [X, Y];
  type Student = {
    name: string;
    roll: number;
  };

  interface Parson {
    name: string;
    roll: number;
  }

  const couple: DynamicTuple<string, string> = ["Mr. S", "Mrs. Y"];
  const parsonDetails2: DynamicTuple<number, Parson> = [
    420,
    { name: "Mahdi", roll: 2 },
  ];
  //
}
