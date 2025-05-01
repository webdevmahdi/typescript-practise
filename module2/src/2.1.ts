{
  let anything: any;
  anything = "Mahdi Hasan mahi";
  // (anything as string).

  const kgToGram = (value: string | number) : string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `Converted value is : ${convertedValue}`;
    }else if(typeof value === "number"){
        return value * 1000;
    }
  };

  const result1 = kgToGram('100') as string;
  const result2 = kgToGram(100) as number;

  type CustomErrorMessage = {
    message: string
  }


  try{

  }catch(error){
    console.log((error as CustomErrorMessage).message);
  }
}
