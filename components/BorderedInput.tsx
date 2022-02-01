import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  hasMarginBottom?: boolean;
  placeholder: string;
}

function BorderedInput({hasMarginBottom, placeholder}:Props) {
  return <TextInput 
    style={[styles.input, hasMarginBottom && styles.margin]}
    placeholder={placeholder}
    // {...rest}
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