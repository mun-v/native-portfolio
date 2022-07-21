import { useState } from "react";
import { COURSES } from "../shared/courses";
import DirectoryScreen from "./DirectoryScreen";

const Main = () => {
  const [courses, setCourses] = useState(COURSES);

  return <DirectoryScreen courses={courses} />;
};

export default Main;