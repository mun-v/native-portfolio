import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: course }) => {
    return (
      <ListItem>
        <Avatar source={course.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{course.name}</ListItem.Title>
          <ListItem.Subtitle>{course.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={props.courses}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
