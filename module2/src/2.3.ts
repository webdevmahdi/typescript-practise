{
    //
    //Generic array

    type GenericType<T> = Array<T>


    const rolls: GenericType<number> = [1,2,3];
    const names: GenericType<string> = ['Mahdi', 'Hasan', 'Mahi'];
    const isStudent: GenericType<boolean> = [true, false, true];
    

    const parsonDetails: GenericType<{name: string, age: number}> = [
        {
            name: 'Mahdi',
            age: 30
        },
        {
            name: 'Kamal',
            age: 300
        }
    ]

    //tuple
    type DynamicTuple<X,Y> = [X, Y]

    const couple: DynamicTuple<string, string> = ['Mr. S', 'Mrs. Y'];
    const parsonDetails2: DynamicTuple<number, {name: string, roll: number}> = [420, {name: 'Mahdi', roll: 2}];
    //
}