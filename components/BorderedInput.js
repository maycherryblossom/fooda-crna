import React from "react";
import { StyleSheet, TextInput } from "react-native";


function BorderedInput({hasMarginBottom, ...rest}) {
  return <TextInput 
    style={[styles.input, hasMarginBottom && styles.margin]}
    {...rest}
    />;
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 0.7,
    paddingHorizontal: 16,
    borderRadius: 18,
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 40
  },
  margin: {
    marginBottom: 16,
  },
})

export default BorderedInput;