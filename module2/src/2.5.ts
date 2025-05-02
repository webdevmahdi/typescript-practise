{
  //

  const createArray = (param: string): string[] => {
    return [param];
  };

  const result1 = createArray("Mahdi");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result2 = createArrayWithGeneric<string>("Mahdi");

  const genericObject = <T>(param: T): T[] => {
    return [param];
  };

  interface Parson {
    id: number;
    name: string;
    student: boolean;
  }
  const result3 = genericObject<Parson>({
    id: 333,
    name: "Mahdi",
    student: true,
  });

  const createGenericTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };
  const resultOfTuple = createGenericTuple<string, number>("Mahdi", 22);

  const createTupleWithObject = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };
  type StudentData = { roll: number; profession: string };
  const resultOfTupleObject = createTupleWithObject<string, StudentData>(
    "Mahdi",
    { roll: 2, profession: "Student" }
  );

  const addCourseToStudent = <T> (student: T) => {
    const course = 'Personal Development';
    return {
        ...student,
        course
    }
  }

  const student1 = addCourseToStudent<{name: string; isStudent: boolean;}>({name: 'Mahdi', isStudent: true});
  const student2 = addCourseToStudent<{name: string; property: string}>({name: 'Hasan', property: 'House'});
  //
}
