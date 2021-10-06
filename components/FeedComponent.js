import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


function FeedComponent(props) {

    return(
        <View style = {styles.container}>

            <View style={styles.messageView}>

            <TouchableOpacity style = {styles.sendbtn}>
                    <Text style = {styles.buttonText}>{props.countBtn}</Text>
                </TouchableOpacity>

                <View style={styles.nameView}>
                <Text style = {styles.name}>{props.text}:</Text>
                <Text style = {styles.nameAnswer}>{props.nameAnswer}&#62;</Text>
                </View>

                <Text style = {styles.answer}>{props.answer}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    messageView:{
        flexDirection: "row",
        alignSelf: "flex-start",
        paddingBottom: 16
    },
    nameView:{
        flexDirection: "row"
    },
    name:{
        paddingLeft: 8,
        paddingRight: 8,
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        color: "#ACACAC",
    },
    nameAnswer:{
        paddingRight: 16,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: "#ACACAC"
    },
    answer:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: "black",
        flexDirection: "row",
        flexShrink: 1
    },
    sendbtn: {
        height: 24,
        width: 24,
        backgroundColor: '#344955',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'white',
        textTransform: 'uppercase',
    }
});

export default FeedComponent;