import React from "react";
import Tabs from "./Tabs";
import Stack from "./Stack";
import CalendarTab from "./CalendarTabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
  <Nav.Screen name="Tabs" component={Tabs} />
  <Nav.Screen name="Stack" component={Stack} />
  <Nav.Screen name="CalendatTab" component={CalendarTab} />
</Nav.Navigator>
);

export default Root;