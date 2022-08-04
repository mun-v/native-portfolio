import { useSelector } from "react-redux";
import { View, FlatList, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import Loading from "../components/LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const FavoritesScreen = ({ navigation }) => {
  const { coursesArray, isLoading, errMess } = useSelector(
    (state) => state.courses
  );
  const favorites = useSelector((state) => state.favorites);

  const renderFavoriteItem = ({ item: course }) => {
    return (
      <ListItem
        onPress={() =>
          navigation.navigate("Directory", {
            screen: "CourseInfo",
            params: { course },
          })
        }
      >
        <Avatar rounded source={{ uri: baseUrl + course.image }} />
        <ListItem.Content>
          <ListItem.Title>{course.name}</ListItem.Title>
          <ListItem.Subtitle>{course.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return (
      <View>
        <Text>{errMess}</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={coursesArray.filter((course) => favorites.includes(course.id))}
      renderItem={renderFavoriteItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FavoritesScreen;
