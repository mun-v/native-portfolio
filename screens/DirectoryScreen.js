import { FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";
import * as Animatable from "react-native-animatable";

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
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <Tile
          tile={course.name}
          caption={course.description}
          featured
          onPress={() => navigation.navigate("CourseInfo", { course })}
          imageSrc={{ uri: baseUrl + course.image }}
        />
      </Animatable.View>
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
