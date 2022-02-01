import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import WriteDiaryModal from "../components/WriteDiaryModal";

const Nativestack = createNativeStackNavigator();

function SearchStack(){
  return(
    <Nativestack.Navigator>
      <Nativestack.Screen
        name='Search'
        component={Search}
        options={{headerShown: false}}
      />
      <Nativestack.Screen
        name='WriteDiaryModal4'
        component={WriteDiaryModal}
        options={{
          headerShown: false,
          presentation: "transparentModal"
        }} 
      />
    </Nativestack.Navigator>
  )
}

export default SearchStack;