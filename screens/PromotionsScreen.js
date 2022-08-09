import { Dimensions, FlatList, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponent";
import * as Animatable from "react-native-animatable";

const PromotionsScreen = ({ navigation }) => {
  const promotions = useSelector((state) => state.promotions);

  if (promotions.isLoading) {
    return <Loading />;
  }
  if (promotions.errMess) {
    return (
      <View>
        <Text>{promotions.errMess}</Text>
      </View>
    );
  }

  const renderPromotionItem = ({ item: promotion }) => {
    return (
      <Animatable.View animation="fadeInRightBig" duration={2000}>
        <Tile
          //   title={promotion.name}
          //   caption={promotion.description}
          featured
          onPress={() => navigation.navigate("PromotionInfo", { promotion })}
          imageSrc={{ uri: baseUrl + promotion.image }}
        />
      </Animatable.View>
    );
  };

  return (
    <FlatList
      data={promotions.promotionsArray}
      renderItem={renderPromotionItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PromotionsScreen;
