//renders filled out eventInfoCard
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import moment from 'moment';

const EventPage = (props) => {

    const URL = `http://dc06e5ce.ngrok.io/events/${props.navigation.state.params.id}`
    const [eventInfo, setEventInfo] = useState({})
  
    useEffect(() => {
          fetch(URL)
              .then(response => response.json())
              .then(data => {
                setEventInfo(data)
              }).catch(function(err) {
                console.log( err);
              })
          }, []);

    console.log(eventInfo.event)

    return (
        <View>
            <Text>hiiii from showpage</Text>
            <Text>{props.navigation.state.params.id}</Text>
            {/* <Text>{moment(eventInfo.event.start_time).add(1, 'hours').calendar()}</Text> */}
            {/* <Text>{eventInfo.event.name}</Text> */}
        </View>
    );

};

export default EventPage;