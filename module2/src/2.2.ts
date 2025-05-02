{
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string,
    age: number
  }

  const user: User2 = {
    name: "Mahdi",
    age: 40,
  };


  type UserWithRole = User1 & {
    role: string
  }
  const userWithDesignation: UserWithRole = {
    name: "Mahdi",
    age: 40,
    role: 'Developer'
  };


  interface UserWithTitle extends User1 {
    title: string
  }

  const userWithTitle: UserWithTitle ={
    name: 'Mahdi',
    age: 30,
    title: 'Founder'
  }     

  type Roll1 = number[];
  const studentRoll: Roll1 = [1,2,3];

  interface Roll2 {
    [index: number] : number
  }
  const studentRoll2: Roll2 = [1,2,3];

  type Add = (num1: number, num2: number) => number
  interface Add2 {
    (num1: number, num2: number) : number
  }

  const add: Add2 = (num1, num2) => num1 + num2;

}
