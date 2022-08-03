import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const DirectoryScreen = ({ navigation }) => {
  const courses = useSelector((state) => state.courses);

  const renderDirectoryItem = ({ item: course }) => {
    return (
      <Tile
        tile={course.name}
        caption={course.description}
        featured
        onPress={() => navigation.navigate("CourseInfo", { course })}
        imageSrc={{ uri: baseUrl + course.image }}
      />
    );
  };

  return (
    <FlatList
      data={courses.coursesArray}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
