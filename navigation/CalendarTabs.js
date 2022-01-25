import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calendar from '../screens/Calendar';
import FriendList from "../screens/FriendList";

const Tab = createMaterialTopTabNavigator();

function CalendarTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="FriendList" component={FriendList} />
    </Tab.Navigator>
  )
}

export default CalendarTab