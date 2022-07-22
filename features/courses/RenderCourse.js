import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderCourse = ({ course }) => {
  if (course) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={course.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              {course.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{course.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderCourse;