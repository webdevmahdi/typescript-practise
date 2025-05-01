{
  const age: number = 2;

  const isAdult = age >= 18 ? "Adult" : "Still kid";
//   console.log({ isAdult });

  const isUser = "";
  const result = isUser ?? "Guest";
  const result2 = isUser ? isUser : "Guest";

//   console.log({ result }, { result2 });

  type Man = {
    name: string;
    age: number;
    address: {
        country: string;
        division: string;
        district: string;
        thana: string;
        village?: string;
    };
    property?: {
        house: string;
        land: string;
    }
  };


  const mahdi: Man = {
    name: 'Mahdi Hasan',
    age: 28,
    address: {
        country: 'Bangladesh',
        division: 'Chittogong',
        district: 'Brahmanbaria',
        thana: 'Sarail'
    },
  }

  const isPropertyAvailable =  mahdi?.property?.house ?? 'Not have anything to live';

  console.log(isPropertyAvailable);

}
