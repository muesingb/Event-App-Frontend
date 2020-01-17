import React, {Component} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePicker extends Component {
  state = {
    date: new Date('2020-06-12'),
    show: true,
  }

  setDate = (event, date) => {
    console.log(date)
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = () => {
    this.setState({
      show: true
    });
  }

  datepicker = () => {
    this.show('date');
  }

  render() {
    const { show, date } = this.state;

    return (
      <View>
        {<DateTimePicker value={date}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
      </View>
    );
  }
}