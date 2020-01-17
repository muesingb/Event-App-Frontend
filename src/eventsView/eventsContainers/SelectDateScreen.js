//step 1 renders blank eventInfoCard
//step 2 renders guests to add - renders UsersFriends

import React, { Fragment, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';

import { StackActions } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { updateEventTime } from '../../store/actions/events'

import DatePicker from '../eventsComponents/DateTimePicker'

const SelectDateScreen = props => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [eventDisplay, onChangeEventDisplay] = useState('2020-01-19')
  const [eventTime, onChangeeventTime] = useState(`${moment()}`);
  
  const markedDates = {
    [eventDisplay]: {selected: true, selectedColor: 'blue'}
  }

  const handleDateSelect = (day) => {
    // console.log(day, day.dateString)
    onChangeeventTime(day.timestamp)
    onChangeEventDisplay(day.dateString)
    // console.log(eventTime)
  }

  const handleOkPress = () => {
    // console.log(eventTime)
    dispatch(updateEventTime(eventTime))
    // console.log(state.eventsAndUsers.selectedEventTime)
    const popAction = StackActions.pop({
      n: 1,
    });
    
    props.navigation.dispatch(popAction);
  }

  // console.log(props.navigation.state.params)

  return (
    <>
    <View style={styles.calendar} >
      <CalendarList
        markedDates={markedDates}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        // onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // ...calendarParams
        onDayPress={(day) => handleDateSelect(day)}
        // Handler which gets executed on day long press. Default = undefined
        />
    </View>
    <Button title="ok" onPress={handleOkPress} />
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

export default SelectDateScreen;