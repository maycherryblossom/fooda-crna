import react from "react";
import { StyleSheet, View, Pressable, Text, Platform, SafeAreaView } from "react-native";
import { YELLOW_BASIC } from "../colors";

function ForSignUpButton({onPress, title, hasMarginBottom, theme}) {
  const isPrimary = theme ==='primary';

  return(
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.wrapper,
          isPrimary && styles.primaryWrapper,
          Platform.OS === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{
          color: isPrimary ? styles.primaryText : styles.secondaryText,
        }}>
        <Text 
        style={[
          styles.text,
          isPrimary ? styles.primaryText : styles.secondaryText
        ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  )
}

ForSignUpButton.defaultProps = {
  theme: 'primary',
};

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 10,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  primaryWrapper: {
    backgroundColor: '#FFD558',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  primaryText: {
    color: '#494949'
  },
  secondaryText: {
    color: '#c4c4c4'
  },
  margin: {
    marginBottom: 8,
  },
})

export default ForSignUpButton;