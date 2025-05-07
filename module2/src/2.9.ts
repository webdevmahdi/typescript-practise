{
    // conditional type.
    type FirstValue = number;
    type SecondValue = string;

    type dataType = FirstValue extends null ? true : SecondValue extends undefined ? undefined : any;

    type SeikhProperty = {
         yacht: string;
        watch: string;
        bike: string;
        car: string;
    }

    type hasVehicle<T> = T extends keyof SeikhProperty ? true : false;

    type hasYacht = hasVehicle<"watch">

}