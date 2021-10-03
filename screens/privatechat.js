import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from "react-native";
import ChatMessage from "../components/chatmessage";

function PrivateChat() {

    return(
        <View style = {styles.container}>
            <View style = {styles.textview}>
                <Text style = {styles.texttitle}>Cezar</Text>
            </View>
            <SafeAreaView style = {styles.safearea}>
                <ScrollView>
                    <ChatMessage position = "flex-start" text = "Lorem Ipsum je pseudo-latinský text, ktorý sa používa pri testovaní layoutu stránok, časopisov, letákov. Používa sa už od 16. storočia. Text pripomína obyčajnú latinčinu, v skutočnosti je to nezmyselná skomolenina." />
                    <ChatMessage position = "flex-start" text = "Lorem Ipsum je pseudo-latinský text, ktorý sa používa pri testovaní layoutu stránok, časopisov, letákov. Používa sa už od 16. storočia. Text pripomína obyčajnú latinčinu, v skutočnosti je to nezmyselná skomolenina." />
                    <ChatMessage position = "flex-end" text = "Lorem Ipsum je pseudo-latinský text, ktorý sa používa pri testovaní layoutu stránok, časopisov, letákov. Používa sa už od 16. storočia. Text pripomína obyčajnú latinčinu, v skutočnosti je to nezmyselná skomolenina." />
                    <ChatMessage position = "flex-start" text = "Lorem Ipsum je pseudo-latinský text, ktorý sa používa pri testovaní layoutu stránok, časopisov, letákov. Používa sa už od 16. storočia. Text pripomína obyčajnú latinčinu, v skutočnosti je to nezmyselná skomolenina." />
                    <ChatMessage position = "flex-end" text = "Lorem Ipsum je pseudo-latinský text, ktorý sa používa pri testovaní layoutu stránok, časopisov, letákov. Používa sa už od 16. storočia. Text pripomína obyčajnú latinčinu, v skutočnosti je to nezmyselná skomolenina." />

                </ScrollView>
            </SafeAreaView>
            <View style = {styles.viewbottom}>
                <TextInput style = {styles.input} placeholder = "Type a message" />
                <TouchableOpacity style = {styles.sendbtn}>
                    <Text style = {styles.sendbtntext}>&#10140;</Text>
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
        height: '85%',
        marginBottom: 32,
    },
    viewbottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        color: '#ACACAC',
        fontSize: 14,
        lineHeight: 18,
        height: '80%',
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#ACACAC',
    },
    sendbtn: {
        height: 48,
        width: 48,
        backgroundColor: '#344955',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendbtntext: {
        fontSize: 14,
        color: 'white',
    }
});

export default PrivateChat;