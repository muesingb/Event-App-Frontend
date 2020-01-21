import React, { useState, useEffect, Component } from 'react';
import {View, Button, Platform} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import { updateEventTime } from '../../store/actions/events'
import moment from 'moment';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

const DatePicker = () => {
  const state = useSelector(state => state.eventsAndUsers)
  const eventTime = useSelector(state => state.eventsAndUsers.selectedEventTime)
  const dispatch = useDispatch()

  useEffect(()=>{
    changeDate(new Date(state.selectedEventTime))
    },[eventTime])

  //Date.now() or new Date(dateObj)
  const [dateState, changeDate] = useState(new Date(state.selectedEventTime))

  const setDate = (event, date) => {
    const difference = date.getTime() - dateState.getTime()
    const newTime = eventTime + difference
    if (newTime == 0) {
      dispatch(updateEventTime(newTime))
    }
    // const updateTime = new Date(newTime)
    // changeDate(updateTime);
  }

  return (
    <View>
        {<DateTimePicker value={dateState}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={setDate} />
        }
      </View>
  )
}

export default DatePicker

// export default class DatePicker extends Component {
//   state = {
//     date: new Date(1580428800000),
//   }

//   setDate = (event, date) => {
//     console.log(date)
//     date = date || this.state.date;

//   }

//   render() {

//     return (
//       <View>
//         {<DateTimePicker value={this.state.date}
//                     mode="time"
//                     is24Hour={true}
//                     display="default"
//                     onChange={this.setDate} />
//         }
//       </View>
//     );
//   }
// }