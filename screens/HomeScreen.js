import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";

const FeaturedItem = (props) => {
  const { item } = props;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }

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
      <FeaturedItem
        item={featCourse}
        isLoading={courses.isLoading}
        errMess={courses.errMess}
      />
      <FeaturedItem
        item={featPromotion}
        isLoading={promotions.isLoading}
        errMess={promotions.errMess}
      />
      <FeaturedItem
        item={featInstructor}
        isLoading={instructors.isLoading}
        errMess={instructors.errMess}
      />
    </ScrollView>
  );
};

export default HomeScreen;
