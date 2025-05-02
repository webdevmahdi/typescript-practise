{
  //Constrain

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Personal Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    isStudent: boolean;
  }>({ id: 33, name: "Mahdi", email: "x@gmail.com", isStudent: true });
    
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    property: string;
  }>({
    id: 44,
    name: "Hasan",
    email: "z@gmail.com",
    property: "House",
  });
}
