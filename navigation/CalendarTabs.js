import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calendar from '../screens/Calendar';
import FriendList from "../screens/FriendList";
import Archive from "../screens/Archive";
import { YELLOW_BASIC } from "../colors";
const Tab = createMaterialTopTabNavigator();

function CalendarTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize:16 },
        tabBarActiveTintColor: YELLOW_BASIC,
        tabBarInactiveTintColor: "#808080",
        tabBarIndicatorStyle: {
          backgroundColor: YELLOW_BASIC
        }
      }}
    >
      <Tab.Screen name="캘린더" component={Calendar} />
      <Tab.Screen name="아카이브" component={Archive} />
      <Tab.Screen name="친구" component={FriendList} />
    </Tab.Navigator>
  )
}

export default CalendarTab