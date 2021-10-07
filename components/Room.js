import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Room (props){

    const openChatroom = () => {
        props.navigation.navigate('Chatroom', { roomId: props.roomId, roomName: props.roomName });
    }

    return (

        <View>
            <TouchableOpacity  style={styles.room} onPress = {openChatroom}>
                <Text style={styles.roomText}>{props.roomName}</Text>
                <Text style={styles.roomText}>({props.roomParticipants})</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    room: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    roomText:{
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 14,
        fontFamily: 'Roboto',
        color: "black"
    }

});
export default Room;