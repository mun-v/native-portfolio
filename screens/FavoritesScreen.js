import { useSelector, useDispatch } from "react-redux";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import Loading from "../components/LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { SwipeRow } from "react-native-swipe-list-view";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

const FavoritesScreen = ({ navigation }) => {
  const { coursesArray, isLoading, errMess } = useSelector(
    (state) => state.courses
  );
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const renderFavoriteItem = ({ item: course }) => {
    return (
      <SwipeRow rightOpenValue={-100}>
        <View style={styles.deleteView}>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() =>
              Alert.alert(
                "Delete Favorite?",
                "Are you sure you wish to delete the favorite class " +
                  course.name +
                  "?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log(course.name + "Not Deleted"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => dispatch(toggleFavorite(course.id)),
                  },
                ],
                { cancelable: false }
              )
            }
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View>
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
        </View>
      </SwipeRow>
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

const styles = StyleSheet.create({
  deleteView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    width: 100,
  },
});

export default FavoritesScreen;
