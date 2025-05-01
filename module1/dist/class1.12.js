"use strict";
{
    function searchValue(value) {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log('Value didn"t found');
        }
    }
    searchValue("Mahdi");
    //For unknown type
    const getMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if (typeof value === "string") {
            const [speed, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(convertedSpeed);
            // console.log({speed, unit});
        }
        else {
            console.log("Wrong input");
        }
    };
    getMeterPerSecond(null);
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Something unexpected happened!");
}
