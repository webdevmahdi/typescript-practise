"use strict";
{
    const myDetails = ["asdf"];
    const friendsList = ['Shovo', 'Mehedi', 'Bayezid', 'Neon'];
    const friendsList2 = ['Masum', 'Sohag', 'Sakib', 'Sabbir'];
    friendsList.push(...friendsList2);
    console.log(...friendsList2);
    const teacherList = {
        math: 'Shafik sir',
        chemistry: 'Mojammel sir',
        physics: 'shafik sir'
    };
    const teacherList2 = {
        ict: 'Shafik sir',
        bangla: 'madam'
    };
    const allTeacherList = Object.assign(Object.assign({}, teacherList), teacherList2);
    console.log(allTeacherList);
    const greetFriends = (...friends) => {
        // console.log(`Hi mr.${friends}`);
        friends.forEach((friend) => console.log(`Hi Mr.${friend}`));
    };
    greetFriends('Mahdi', 'Shovo', 'Mehedi');
}
