import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Room from './Room';

function FilteredRooms (props){

return (

    //This need to be done more efficently (inside chatRooms)
        <View style={styles.filteredArea}>
            <Text style={styles.letterFiltered}>{props.letter}</Text>
            <Room roomName = "Cars" roomParticipants = {44}/>
            <Room roomName = "Cats" roomParticipants = {4}/>
            <Room roomName = "Cactuses" roomParticipants = {454}/>
            <Room roomName = "Cry" roomParticipants = {1}/>
            <View style={styles.borderArea}></View>
        </View>

);
}

const styles = StyleSheet.create({
    filteredArea:{
        height: "100%",
        flexDirection: 'column', 
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "red"
    },
    borderArea:{
        borderBottomWidth: 1,
        borderColor: "#ACACAC",
        width: "80%",
        alignSelf: 'center',
        paddingTop: 16
    },
    letterFiltered:{
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#ACACAC',
        textAlign: "left",
        paddingBottom: 8
    }

});
export default FilteredRooms;