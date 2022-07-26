import {
  Platform,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DirectoryScreen from "./DirectoryScreen";
import CourseInfoScreen from "./CourseInfoScreen";
import PromotionsScreen from "./PromotionsScreen";
import Constants from "expo-constants";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import ADPLogo1 from "../assets/images/ADPLogo1.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchInstructors } from "../features/instructors/instructorsSlice";
import { fetchCourses } from "../features/courses/coursesSlice";
import { fetchPromotions } from "../features/promotions/promotionsSlice";
import { fetchComments } from "../features/comments/commentsSlice";
import ReservationScreen from "./ReservationScreen";
import FavoritesScreen from "./FavoritesScreen";
import LoginScreen from "./LoginScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import NetInfo from "@react-native-community/netinfo";

const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }) => ({
          title: "Contact Us",
          headerLeft: () => (
            <Icon
              name="address-card"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ReservationNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Reservation"
        component={ReservationScreen}
        options={({ navigation }) => ({
          title: "Reservation Search",
          headerLeft: () => (
            <Icon
              name="music"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: "Favorite Class",
          headerLeft: () => (
            <Icon
              name="heart"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const LoginNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation, route }) => ({
          headerTitle: getFocusedRouteNameFromRoute(route),
          headerLeft: () => (
            <Icon
              name={
                getFocusedRouteNameFromRoute(route) === "Register"
                  ? "user-plus"
                  : "sign-in"
              }
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="info-circle"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#F8751B" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerLeft: () => (
            <Icon
              name="home"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Directory" screenOptions={screenOptions}>
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={({ navigation }) => ({
          title: "Class Directory",
          headerLeft: () => (
            <Icon
              name="list"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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

const PromotionsNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Promotions"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="Promotions"
        component={PromotionsScreen}
        options={({ navigation }) => ({
          title: "Promotions",
          headerLeft: () => (
            <Icon
              name="bookmark"
              type="font-awesome"
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
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
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 1 }}>
        <Image source={ADPLogo1} style={styles.drawerImage} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.drawerHeaderText}>Amira Dance Productions</Text>
      </View>
    </View>
    <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
  </DrawerContentScrollView>
);

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchPromotions());
    dispatch(fetchInstructors());
    dispatch(fetchComments());
  }, [dispatch]);

  const showNetInfo = async () => {
    const connectionInfo = await NetInfo.fetch();
    Platform.OS === "ios"
      ? Alert.alert("Initial Network Connectivity Type:", connectionInfo.type)
      : ToastAndroid.show(
          "Initial Network Connectivity Type: " + connectionInfo.type,
          ToastAndroid.LONG
        );
  };

  useEffect(() => {
    showNetInfo();

    const unsubscribeNetInfo = NetInfo.addEventListener((connectionInfo) => {
      handleConnectivityChange(connectionInfo);
    });

    return unsubscribeNetInfo;
  }, []);

  const handleConnectivityChange = (connectionInfo) => {
    let connectionMsg = "You are now connected to an active network.";
    switch (connectionInfo.type) {
      case "none":
        connectionMsg = "No network connection is active.";
        break;
      case "unknown":
        connectionMsg = "The network connection state is now unknown.";
        break;
      case "cellular":
        connectionMsg = "You are now connected to a cellular network.";
        break;
      case "wifi":
        connectionMsg = "You are now connected to a WiFi network.";
        break;
    }
    Platform.OS === "ios"
      ? Alert.alert("Connection change:", connectionMsg)
      : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#D2D6FD" }}
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen
          name="Login"
          component={LoginNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Icon
                name="sign-in"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color }) => (
              <Icon
                name="home"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Directory"
          component={DirectoryNavigator}
          options={{
            title: "Class Directory",
            drawerIcon: ({ color }) => (
              <Icon
                name="list"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ReserveClass"
          component={ReservationNavigator}
          options={{
            title: "Reserve Class",
            drawerIcon: ({ color }) => (
              <Icon
                name="music"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesNavigator}
          options={{
            title: "My Favorites",
            drawerIcon: ({ color }) => (
              <Icon
                name="heart"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Promotions"
          component={PromotionsNavigator}
          options={{
            title: "Promotions",
            drawerIcon: ({ color }) => (
              <Icon
                name="bookmark"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{
            title: "About",
            drawerIcon: ({ color }) => (
              <Icon
                name="info-circle"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactNavigator}
          options={{
            title: "Contact Us",
            drawerIcon: ({ color }) => (
              <Icon
                name="address-card"
                type="font-awesome"
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
  drawerHeader: {
    backgroundColor: "#FB751B",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
});

export default Main;
