"use strict";
var _a, _b;
{
    const age = 2;
    const isAdult = age >= 18 ? "Adult" : "Still kid";
    //   console.log({ isAdult });
    const isUser = "";
    const result = isUser !== null && isUser !== void 0 ? isUser : "Guest";
    const result2 = isUser ? isUser : "Guest";
    const mahdi = {
        name: 'Mahdi Hasan',
        age: 28,
        address: {
            country: 'Bangladesh',
            division: 'Chittogong',
            district: 'Brahmanbaria',
            thana: 'Sarail'
        },
    };
    const isPropertyAvailable = (_b = (_a = mahdi === null || mahdi === void 0 ? void 0 : mahdi.property) === null || _a === void 0 ? void 0 : _a.house) !== null && _b !== void 0 ? _b : 'Not have anything to live';
    console.log(isPropertyAvailable);
}
