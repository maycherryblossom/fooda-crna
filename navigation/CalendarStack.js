import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Recommendation from "../screens/Recommendation";
import WriteDiaryModal from "../components/WriteDiaryModal";
import MucketList from "../screens/MucketList";
import CalendarTab from "./CalendarTabs";

const Nativestack = createNativeStackNavigator();

function CalendarStack(){
  return(
    <Nativestack.Navigator>
      <Nativestack.Screen
        name='MucketList'
        component={CalendarTab}
        options={{headerShown: false}}
      />
      <Nativestack.Screen
        name='WriteDiaryModal0'
        component={WriteDiaryModal}
        options={{
          headerShown: false,
          presentation: "transparentModal"
        }} 
      />
    </Nativestack.Navigator>
  )
}

export default CalendarStack