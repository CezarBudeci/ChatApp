import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function MessageListTemplate({ navigation }) {

    return (
        <View style = {styles.viewmessage}>
            <Text style = {styles.textperson}>Samantha</Text>
            <TouchableOpacity style = {styles.chatbtn} onPress = {navigation.navigate('PrivateChat')}>
                <Text style = {styles.textbtn}>Message here</Text>
            </TouchableOpacity>
        </View>
        //the text will be subsituted with props
    );
}

const styles = StyleSheet.create({
    viewmessage: {
        borderColor: '#ACACAC',
        borderBottomWidth: 1,
        marginTop: 8,
    },
    textperson: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#ACACAC',
        marginBottom: 8,
    },
    chatbtn: {
        paddingBottom: 8,
    },
    textbtn: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        color: 'black',
    },
});

export default MessageListTemplate;