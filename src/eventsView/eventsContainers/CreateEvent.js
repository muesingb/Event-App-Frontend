//step 1 renders blank eventInfoCard
//step 2 renders guests to add - renders UsersFriends

import React, { Fragment } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import DatePicker from '../eventsComponents/DateTimePicker'

const CreateEvent = props => {

  return (
    <>
    <View style={styles.calendar} >
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={1}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // ...calendarParams
        onDayPress={(day) => {console.log('selected day', day.timestamp/1000)}}
        // Handler which gets executed on day long press. Default = undefined
        />
    </View>
    <View style={styles.datepicker} >
      <DatePicker />
      {/* <Button title="Date Picked"/> */}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  calendar: {
    flex: 2
  },
  datepicker: {
    flex: 1
  }
});

export default CreateEvent;