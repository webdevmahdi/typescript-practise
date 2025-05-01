{

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo: string,
        address: string
    }

    const student1 : Student = {
        name: 'Mahdi',
        age: 20,
        gender: 'male',
        contactNo: '0166588581',
        address: 'Brahmanbaria'
    };
    
    const student2: Student = {
        name: 'Hasan',
        age: 30,
        gender: 'male',
        contactNo: '015555555555',
        address: 'Dhk'
    }

    //for func
    type Sum = (num1: number, num2: number) => string;
    const add : Sum =(num, num4) => num +num4 + 'Mahdi';
}