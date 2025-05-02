{
  //

  type DeveloperDetails<T, X = null> = {
    name: string;
    computer: {
      brand: string;
      processor: string;
      releaseDate: number;
    };
    headPhone: T;
    car?: X;
  };

  type HeadPhone = {
    name: string;
    type: string;
    brand: string;
  };

  interface Car {
    brand: string;
    type: string;
    releaseYear: number;
  }

  const fullStackDeveloper: DeveloperDetails<HeadPhone, Car> = {
    name: "Mahdi hasan",
    computer: {
      brand: "Dell",
      processor: "Core-i7",
      releaseDate: 2021,
    },
    headPhone: {
      name: "QCY-max",
      type: "Air-pod",
      brand: "China",
    },
    car: {
      brand: "Ferrari",
      type: "Super car",
      releaseYear: 2018,
    },
  };

  interface HeadPhoneDetails {
    name: string;
    type: string;
    isWireless: boolean;
    dedicatedWireSection: boolean;
    price: number;
  }

  const frontEndDeveloper: DeveloperDetails<HeadPhoneDetails> = {
    name: "Mahi",
    computer: {
      brand: "Acer",
      processor: "Core-i3",
      releaseDate: 2021,
    },
    headPhone: {
      name: "Apple gen-3 copy",
      type: "Headset",
      isWireless: true,
      dedicatedWireSection: false,
      price: 2500,
    },
  };

  //
}
