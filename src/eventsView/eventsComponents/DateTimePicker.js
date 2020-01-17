import React, { useState, Component } from 'react';
import {View, Button, Platform} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

// const DatePicker = () => {
//   // const state = useSelector(state => state)
//   // const dispatch = useDispatch()

//   const [dateState, changeDate] = useState(Date.now('2020-06-12'))

//   const setDate = (event, date) => {
//     console.log(date)
//     date = date || dateState;

//   }

//   return (
//     <View>
//         {<DateTimePicker value={dateState}
//                     mode="time"
//                     is24Hour={true}
//                     display="default"
//                     onChange={setDate} />
//         }
//       </View>
//   )
// }

// export default DatePicker

export default class DatePicker extends Component {
  state = {
    date: new Date('2020-06-12'),
  }

  setDate = (event, date) => {
    console.log(date)
    date = date || this.state.date;

  }

  render() {

    return (
      <View>
        {<DateTimePicker value={this.state.date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
      </View>
    );
  }
}