import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Recommendation from "../screens/Recommendation";
import WriteDiaryModal from "../components/WriteDiaryModal";
import MucketList from "../screens/MucketList";

const Nativestack = createNativeStackNavigator();

function MucketListStack(){
  return(
    <Nativestack.Navigator>
      <Nativestack.Screen
        name='MucketList'
        component={MucketList}
        options={{headerShown: false}}
      />
      <Nativestack.Screen
        name='WriteDiaryModal1'
        component={WriteDiaryModal}
        options={{
          headerShown: false,
          presentation: "transparentModal"
        }} 
      />
    </Nativestack.Navigator>
  )
}

export default MucketListStack;