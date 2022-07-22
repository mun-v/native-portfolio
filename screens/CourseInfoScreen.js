import RenderCourse from "../features/courses/RenderCourse";

const CourseInfoScreen = ({ route }) => {
  const { course } = route.params;
  return <RenderCourse course={course} />;
};

export default CourseInfoScreen;
