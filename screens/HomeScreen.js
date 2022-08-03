import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={{ uri: baseUrl + item.image }}>
          {console.log(baseUrl + item.image)}
          <View style={{ justifyContent: "center", flex: 1 }}>
            {/* <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              {item.name}
            </Text> */}
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const courses = useSelector((state) => state.courses);
  const promotions = useSelector((state) => state.promotions);
  const instructors = useSelector((state) => state.instructors);

  const featCourse = courses.coursesArray.find((item) => item.featured);
  const featPromotion = promotions.promotionsArray.find(
    (item) => item.featured
  );
  const featInstructor = instructors.instructorsArray.find(
    (item) => item.featured
  );

  return (
    <ScrollView>
      <FeaturedItem item={featCourse} />
      <FeaturedItem item={featPromotion} />
      <FeaturedItem item={featInstructor} />
    </ScrollView>
  );
};

export default HomeScreen;
