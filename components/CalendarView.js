import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, StyleSheet } from 'react-native';

function CalendarView() {
  return <Calendar 
    style={styles.calendar} 
    dayComponent={({date, state}) => {
      return (
        <View>
          <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>
            {date.day}
          </Text>
          <Text>image</Text>
        </View>
      );
    }}  
  />;
}

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 0,
    height: 1000
  }
})

export default CalendarView;