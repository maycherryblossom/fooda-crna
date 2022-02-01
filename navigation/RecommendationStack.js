import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Recommendation from "../screens/Recommendation";
import WriteDiaryModal from "../components/WriteDiaryModal";

const Nativestack = createNativeStackNavigator();

function RecommendationStack(){
  return(
    <Nativestack.Navigator>
      <Nativestack.Screen
        name='Recommendation'
        component={Recommendation}
        options={{headerShown: false}}
      />
      <Nativestack.Screen
        name='WriteDiaryModal3'
        component={WriteDiaryModal}
        options={{
          headerShown: false,
          presentation: "transparentModal"
        }} 
      />
    </Nativestack.Navigator>
  )
}

export default RecommendationStack;