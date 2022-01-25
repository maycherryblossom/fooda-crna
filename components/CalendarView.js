import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native-web';

function CalendarView() {
  return <Calendar style={styles.calendar} />;
}

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    height: 2000
  }
})

export default CalendarView;