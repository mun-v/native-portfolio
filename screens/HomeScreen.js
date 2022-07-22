import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { COURSES } from "../shared/courses";
import { PROMOTIONS } from "../shared/promotions";
import { INSTRUCTORS } from "../shared/instructors";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [courses, setCourses] = useState(COURSES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [instructors, setinstructors] = useState(INSTRUCTORS);

  const featCourse = courses.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featInstructor = instructors.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featCourse} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featInstructor} />
    </ScrollView>
  );
};

export default HomeScreen;
