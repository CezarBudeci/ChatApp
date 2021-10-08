import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Room from './Room';


function FilteredRooms (props){
    const[chatrooms, setChatrooms] = useState([]);
    // const[filteredChat, setFilteredChat] = useState(null);

    

    // const searchFilterFunction = (text) => {
        
    //     if (text) {
          
    //       const newData = chatrooms.filter(function (item) {
    //         const itemData = item.name
    //           ? item.name.toUpperCase()
    //           : ''.toUpperCase();
    //         const textData = text.toUpperCase();
    //         return itemData.indexOf(textData) > -1;
    //       });
    //       setFilteredChat(newData);
          
    //     }
    // };
    
    // if(props.searchText) {
    //     searchFilterFunction(props.searchText);
    // }

    useEffect(() => {
        fetchRooms();
    }, [chatrooms]);

    const fetchRooms = () => {
        fetch('https://chatapp-a1d56-default-rtdb.europe-west1.firebasedatabase.app/publicchatrooms/.json')
        .then(res => res.json())
        .then(data => addKeys(data))
        .catch(err => console.error(err));
    }

    const addKeys = (data) => {
        const keys = Object.keys(data);
        const valueKeys = Object.values(data).map((item, index) =>
        Object.defineProperty(item, 'id', {value: keys[index]}));
        setChatrooms(valueKeys);
    }

    return (
        <FlatList style={styles.filteredArea} data = {chatrooms} keyExtractor = {item => item.id} renderItem ={(item) => (
            <Room private = {false} roomName = {item.item.name} roomId = {item.item.id} navigation = {props.navigation} />
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
export default FilteredRooms;