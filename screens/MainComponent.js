import { useState } from "react";
import { COURSES } from "../shared/courses";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import CourseInfoScreen from "./CourseInfoScreen";

const Main = () => {
  const [courses, setCourses] = useState(COURSES);
  const [selectedCourseId, setSelectedCourseId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        courses={courses}
        onPress={(courseId) => setSelectedCourseId(courseId)}
      />
      <CourseInfoScreen
        course={courses.filter((course) => course.id === selectedCourseId)[0]}
      />
    </View>
  );
};

export default Main;
