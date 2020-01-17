import React, { Fragment, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';

import { StackActions } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { updateEventTime } from '../../store/actions/events'

import DatePicker from '../eventsComponents/DateTimePicker'

const SelectDateScreen = props => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [eventDisplay, onChangeEventDisplay] = useState(`${moment().format('YYYY-MM-DD')}`)
  const [eventTime, onChangeeventTime] = useState(Date.now());
  
  const markedDates = {
    [eventDisplay]: {selected: true, selectedColor: 'purple'}
  }

  const handleDateSelect = (day) => {
    onChangeeventTime(day.timestamp)
    onChangeEventDisplay(day.dateString)
  }

  const handleOkPress = () => {
    dispatch(updateEventTime(eventTime))
    const popAction = StackActions.pop({
      n: 1,
    });
    
    props.navigation.dispatch(popAction);
  }

  return (
    <>
      <View style={styles.calendar} >
        <CalendarList
          markedDates={markedDates}
          pastScrollRange={0} // Max amount of months allowed to scroll to the past
          futureScrollRange={50} // Max amount of months allowed to scroll to the future
          scrollEnabled={true} // Enable or disable scrolling of calendar list
          showScrollIndicator={true} // Enable or disable vertical scroll indicator
          onDayPress={(day) => handleDateSelect(day)}
          />
      </View>
      <Button title="ok" onPress={handleOkPress} />
      <View style={styles.datepicker} >
        <DatePicker />
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