import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Room from './Room';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebase';


function PrivateRooms(props){
    const chatroomsRef = firestore.collection('chatrooms');
    const query = chatroomsRef.where('private', '!=', false); // and add country filter by account country
    const[chatrooms] = useCollectionData(query, { idField: 'id' });
    if(chatrooms) {
        chatrooms.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
    });}


    return (
        <FlatList style={styles.filteredArea} data = {chatrooms} keyExtractor = {item => item.id} renderItem ={(item) => (
            <Room roomName = {item.item.name} roomId = {item.item.id} navigation = {props.navigation} />
        )} />
    );
}

const styles = StyleSheet.create({
    filteredArea:{
        height: "40%",
        flexDirection: 'column', 
        marginLeft: 8,
        // marginBottom: 16,
        // borderWidth: 1,
        // borderColor: "red"
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
export default PrivateRooms;