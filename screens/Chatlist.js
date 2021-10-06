import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import MessageListTemplate from "../components/messagelisttemplate";

function ChatList() {

    return(
        <View style = {styles.container}>
            <View style = {styles.textview}>
                <Text style = {styles.texttitle}>Messaging</Text>
            </View>
            <SafeAreaView style = {styles.safearea}>
                <ScrollView>
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                    <MessageListTemplate />
                </ScrollView>
            </SafeAreaView>
            <View style = {styles.lastbtnview}>
                <TouchableOpacity style = {styles.lastbtn}>
                    <Text style = {styles.lastbtntext}>show friends</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style = 'auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginBottom: 64,
        marginLeft: 32,
        marginRight: 32,
        flex: 1,
    },
    textview: {
        marginBottom: 32,
    },
    texttitle: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ACACAC'
    },
    safearea: {
        height: '75%',
    },
    lastbtnview: {
        marginTop: 64,
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
        height: 36,
        justifyContent: 'center',
    },
    lastbtn: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#344955',
        borderRadius: 4,
    },
    lastbtntext: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'white',
        textTransform: 'uppercase',
    }

});

export default ChatList;