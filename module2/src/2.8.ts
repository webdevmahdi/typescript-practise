{
    type TodoData = {
        userId: number;
        id: number;
        title: number;
        completed: boolean
    }

    const todoData = async () :Promise<TodoData> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    }

    todoData()




    // const customPromise = () : Promise<boolean> => {
    //     return new Promise<boolean>((resolve, reject) => {
    //         const fetchedData: boolean = true;
    //         if(fetchedData){
    //             resolve(fetchedData);
    //         }else{
    //             reject('Failed to load data!');
    //         }
    //     })
    // }


    // const output = async (): Promise<boolean> => {
    //     const data: boolean = await customPromise();
    //     return data;
    // }

    // output()
}