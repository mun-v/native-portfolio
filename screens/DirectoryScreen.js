import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";

const DirectoryScreen = ({ navigation }) => {
  const courses = useSelector((state) => state.courses);

  if (courses.isLoading) {
    return <Loading />;
  }
  if (courses.errMess) {
    return (
      <View>
        <Text>{courses.errMess}</Text>
      </View>
    );
  }

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
