{
    type AlphaNumeric = string | number;


    const addValue = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString();
        }
    }

    const result = addValue(20, 40)
    console.log(result);


    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}.`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser : NormalUser = {
        name: 'Mahdi',
    }
    const adminUser : AdminUser ={
        name: 'Hasan Mahdi',
        role: 'admin'
    }

    getUser(adminUser)
}