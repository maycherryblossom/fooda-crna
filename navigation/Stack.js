import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/LogIn";

const NativeStack = createNativeStackNavigator();


function Stack() {
  return(
    <NativeStack.Navigator>
      <NativeStack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
      />
    </NativeStack.Navigator>
  )
}

export default Stack;