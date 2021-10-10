import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from "react-native";
import ChatMessage from "../components/chatmessage";
import { auth } from '../firebase';
import BigList from "react-native-big-list";


function PrivateChat(props) {
    const[message, setMessage] = useState('');
    const[messages, setMessages] = useState([]);
    const bigListRef = useRef();

        
    const sendMessage = () => {
        fetch(`https://chatapp-a1d56-default-rtdb.europe-west1.firebasedatabase.app/privaterooms/${props.route.params.roomData.roomid}/messages/.json`, {
            method: 'POST',
            body: JSON.stringify({
                message: message,
                sender: auth.currentUser.uid,
                receiver: props.route.params.friendId
            })
        })
        .then(res => getMessages())
        .catch(err => console.error(err));
        setMessage('');
    }

    useEffect(() => {
        getMessages()
    }, [messages]);

    const getMessages = () => {
        
        fetch(`https://chatapp-a1d56-default-rtdb.europe-west1.firebasedatabase.app/privaterooms/${props.route.params.roomData.roomid}/messages/.json`)
        .then(res => res.json())
        .then(data => addKeys(data))
        .catch(err => console.error(err));
        
    }

    const addKeys = (data) => {
        if(data) {
            const keys = Object.keys(data);
            const valueKeys = Object.values(data).map((item, index) =>
            Object.defineProperty(item, 'id', {value: keys[index]}));
            setMessages(valueKeys);
            
        }
    }

    const scrollFunc = () => {
        if(typeof bigListRef.current !== 'undefined') {
            bigListRef.current.scrollToEnd();
        }
    }



    return(
        <View style = {styles.container}>
            <View style = {styles.textview}>
                <Text style = {styles.texttitle}>{props.route.params.name}</Text>
            </View>
            <SafeAreaView style = {styles.safearea}>
                <BigList ref = {bigListRef} onContentSizeChange = {scrollFunc} data = {messages} keyExtractor = {item => item.id} renderItem = {item => <ChatMessage position = {item.item.sender === auth.currentUser.uid ? "flex-end" : "flex-start"} text = {item.item.message} />} />
            </SafeAreaView>
            <View style = {styles.viewbottom}>
                <TextInput style = {styles.input} placeholder = "Type a message" value = {message} onChangeText = {text => setMessage(text)} />
                <TouchableOpacity style = {styles.sendbtn} onPress = {sendMessage}>
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
        height: '100%',
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