import { Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

const RenderCourse = (props) => {
  const { course } = props;
  if (course) {
    return (
      <Card containerStyle={styles.cardContainer}>
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
        <Icon
          name={props.isFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          raised
          reverse
          onPress={() =>
            props.isFavorite
              ? console.log("Already set as a favorite")
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
});

export default RenderCourse;
