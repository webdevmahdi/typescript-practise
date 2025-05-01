"use strict";
const personDetails = {
    myName: 'Mahdi',
    fullName: {
        firstName: 'Mahdi',
        middleName: 'Hasan',
        lastName: 'Mahi'
    },
    phone: '01766588581',
    address: 'Uganda',
};
const { myName, fullName: { firstName, middleName, lastName }, address } = personDetails;
console.log(lastName);
const friends = ['Shovo', 'Mehedi', 'Nain', 'bayezid', 'Rifat', 'Bijoy'];
const [, , mamo, ...baki] = friends;
console.log(mamo, `Baki gula ekhane ace ${baki}`);
