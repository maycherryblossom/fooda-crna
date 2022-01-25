import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { YELLOW_BASIC } from '../colors';
import icon from 'react-native-vector-icons/MaterialIcons'

function FloatingWriteButton() {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: 'white'}}>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 30,
    right:30,
    width: 40,
    height: 40,
    borderRadius: 28,
    //ios전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4,},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //android shadow
    elevation: 5,
    //android 물결 밖으로 안나가게
    overflow: Platform.select({android: 'hidden'})
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 28,
    backgroundColor: YELLOW_BASIC,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWriteButton;