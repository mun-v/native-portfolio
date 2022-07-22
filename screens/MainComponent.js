import DirectoryScreen from "./DirectoryScreen";
import { Platform, View } from "react-native";
import CourseInfoScreen from "./CourseInfoScreen";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5637DD",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={{ title: "Course Directory" }}
      />
      <Stack.Screen
        name="CourseInfo"
        component={CourseInfoScreen}
        options={({ route }) => ({
          title: route.params.course.name,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      <DirectoryNavigator />
    </View>
  );
};

export default Main;
