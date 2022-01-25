import React from "react";
import { TouchableOpacity, Text, SafeAreaView, StyleSheet, View } from "react-native";
import CalendarView from "../components/CalendarView";
import FloatingWriteButton from "../components/FloatingWriteButton";

function Calendar() {
  return (
    <View style={styles.block}>
      <CalendarView />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  }
})

export default Calendar;