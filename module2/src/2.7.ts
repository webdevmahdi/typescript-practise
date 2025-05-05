{
    //
    type Collection = {
        watch: string;
        superCar: string;
        yacht: string;
    };
    type Owner = "Watch" | "superCar" | "yacht";
    type OwnerCollection = keyof Collection;

    const owned: Owner = "superCar";
    const ownerCollectionThings : OwnerCollection = "watch";


    const getObjectValue =<X, Y extends keyof X> (obj:X, key:Y) => {
        return obj[key];
    }

    const user = {
        id: 23,
        name: 'Mahdi',
        age: 30
    }

    const mahdi = {
        age: 2000,
        address: 'Bangladesh',
        house: 'Multiple',
        laptop: 3
    }

    const result = getObjectValue(user, 'id');
    const result2 = getObjectValue(mahdi, 'laptop');







    //
}