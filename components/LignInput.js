import React from "react";
import { StyleSheet, TextInput } from "react-native";


function LignInput({hasMarginBottom, ...rest}) {
  return <TextInput 
    style={[styles.input, hasMarginBottom && styles.margin]}
    {...rest}
    placeholderTextColor='#BCBCBC'
    />;
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 1,
    height: 40,
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#DCDCDC',
    fontSize: 20,
  },
  margin: {
    marginBottom: 10,
  },
})

export default LignInput;