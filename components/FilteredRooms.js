import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Room from './Room';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../firebase';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';

function FilteredRooms (props){
    const chatroomsRef = firestore.collection('chatrooms');
    const query = chatroomsRef.orderBy('name');
    const[chatrooms] = useCollectionData(query, { idField: 'id' });
    


    return (

        //This need to be done more efficently (inside chatRooms)
            // <View style={styles.filteredArea}>
                <FlatList style={styles.filteredArea} data = {chatrooms} keyExtractor = {item => item.id} renderItem ={(item) => (
                    <Room roomName = {item.item.name} roomId = {item.item.id} navigation = {props.navigation} />
                )} />
                // {/* <Text style={styles.letterFiltered}>{props.letter}</Text>
                // <Room roomName = "Cars" roomParticipants = {44}/>
                // <Room roomName = "Cats" roomParticipants = {4}/>
                // <Room roomName = "Cactuses" roomParticipants = {454}/>
                // <Room roomName = "Cry" roomParticipants = {1}/>
                // <View style={styles.borderArea}></View> */}
                // <Button title = "show" onPress = {showsmth} />
            // </View>

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