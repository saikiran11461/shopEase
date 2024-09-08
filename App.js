import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Likes from "./Screens/Likes";
import Cart from "./Screens/Cart";
import Profile from "./Screens/Profile";
import Splash from "./Screens/Splash";
import FontAwsom from "@expo/vector-icons/FontAwesome";
import MenProducts from "./Screens/MenProducts";
import WomenProducts from "./Screens/WomenProducts";
import KidsProducts from "./Screens/KidsProducts";
import { Provider } from "react-redux";
import {store} from "./Redux/Store"
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenCollection" component={MenProducts} />
      <Stack.Screen name="WomenCollection" component={WomenProducts} />
      <Stack.Screen name="KidsCollection" component={KidsProducts} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color }) => (
            <FontAwsom name="home" color={"#F5D3E5"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarActiveTintColor: "black",
          tabBarIcon: () => (
            <FontAwsom name="heart" color={"#F5D3E5"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarActiveTintColor: "black",
          tabBarIcon: () => (
            <FontAwsom name="cart-plus" color={"#F5D3E5"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: "black",
          tabBarIcon: () => (
            <FontAwsom name="user" color={"#F5D3E5"} size={30} />
          ),
        }}
      />
       <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{ tabBarButton: () => null }} 
      />
    </Tab.Navigator>
  );
}

// function AppStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="AppTabs" component={AppTabs} />
//       <Stack.Screen name="ProductStack" component={ProductStack} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>    
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Group>
              <Stack.Screen name="AppTabs" component={AppTabs} />
              <Stack.Screen name="ProductStack" component={ProductStack} />
          </Stack.Group>
          <Stack.Screen name="Auth" component={AuthStack} />
          {/* <Stack.Screen name="App" component={AppStack} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
