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

  



}
