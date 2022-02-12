import React from "react";
import Tabs from "./Tabs";
import Stack from "./Stack";
import CalendarTab from "./CalendarTabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/LogIn"

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator 
    screenOptions={{ headerShown: false }}
    initialRouteName="Stack"
    >
  {/* <Nav.Screen name="SignIn" component={SignIn} options={{headerShown: false}} /> */}
  <Nav.Screen name="Tabs" component={Tabs} />
  <Nav.Screen name="Stack" component={Stack} />
  <Nav.Screen name="CalendatTab" component={CalendarTab} />
</Nav.Navigator>
);

export default Root;