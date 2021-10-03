import React from "react";
import { StyleSheet, View, Text } from "react-native";


function ChatMessage(props) {

    return(
        <View style = {styles.container}>
            <Text style = {[styles.textmessage, {alignSelf: props.position}]}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    textmessage: {
        maxWidth: '50%',
        borderWidth: 1,
        borderColor: '#344955',
        borderRadius: 4,
        backgroundColor: 'rgba(52, 73, 85, 0.3)',
        color: 'black',
        paddingBottom: 16,
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 8,
        fontSize: 14,
    }
});

export default ChatMessage;