import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { COURSES } from "../shared/courses";

const DirectoryScreen = ({ navigation }) => {
  const [courses, setCourses] = useState(COURSES);

  const renderDirectoryItem = ({ item: course }) => {
    return (
      <ListItem onPress={() => navigation.navigate("CourseInfo", { course })}>
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
      data={courses}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;
