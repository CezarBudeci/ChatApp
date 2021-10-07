import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FilteredRooms from '../components/FilteredRooms';
import PrivateRooms from '../components/privaterooms';


function ChatRoomSelection ({ navigation }){

    return (
        <View style={styles.container}>
            <Text style={styles.texttitle}>Chat rooms</Text>
            <View style = {styles.viewTop}>
                <TextInput style = {styles.input} placeholder = "Search for a room" />
            </View>
            <View style={styles.roomsArea}>
                <Text style = {styles.roomtypestext}>Public rooms</Text>
                <FilteredRooms navigation = {navigation} />
                <Text style = {styles.roomtypestext}>Private rooms</Text>
                <PrivateRooms navigation = {navigation} />
            </View>
            <TouchableOpacity style = {styles.createbtn} onPress = {() => navigation.navigate('CreateChatRoom')}>
                <Text style = {styles.createbtntext}>Create a chatroom</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingTop: 64,
        paddingBottom: 64,
        paddingLeft: 32,
        paddingRight: 32,
        textAlign: 'center',
        alignContent: "center",
    },
    roomsArea:{
        marginTop: 32,
        flex: 1,
        flexDirection: 'column',   
        // borderWidth: 1,
        // borderColor: "green"     
    },
    roomtypestext: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ACACAC',
        textAlign: "left",
        paddingBottom: 8,
        
    },
    texttitle: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ACACAC',
        textAlign: "left",
        paddingBottom: 32,
    },
    viewTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        color: '#ACACAC',
        fontSize: 14,
        lineHeight: 18,
        height: '100%',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ACACAC',
    },
    createbtn: {
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#344955',
        borderRadius: 4,
    },
    createbtntext: {
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 18,
        color: 'white'
    }

});
export default ChatRoomSelection;