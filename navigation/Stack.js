import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import SignUpPassword from "../screens/SignUpPassword";

const NativeStack = createNativeStackNavigator();


function Stack() {
  return(
    <NativeStack.Navigator>
      <NativeStack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
      />
      <NativeStack.Screen
      name="SignUp"
      component={SignUp}
      />
      <NativeStack.Screen
      name="SignUpPassword"
      component={SignUpPassword}
      />
    </NativeStack.Navigator>
  )
}

export default Stack;