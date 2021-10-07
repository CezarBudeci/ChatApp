import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View, CheckBox, Picker, TouchableOpacity, ScrollView, Button } from 'react-native';
import FeedComponent from '../components/FeedComponent';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../firebase';
import { FlatList } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { useEffect } from 'react';



function Feed (props){
    const feedsRef = firestore.collection('chatroomfeeds');
    const query = feedsRef.where('roomid', '==', props.route.params.roomId);
    const[feeds] = useCollectionData(query, { idField: 'id' });
    if(feeds) {
        feeds.sort(function (a, b) {
            return a.createdAt - b.createdAt;
    });}
    const[message, setMessage] = useState('');
    const uid = auth.currentUser;
    const[isReply, setIsReply] = useState(false);
    const[replyDoc, setReplydoc] = useState('');
    const[replyMess, setReplyMess] = useState('');
    const[replyId, setReplyId] = useState('');
    const[replyName, setReplyName] = useState('');
    const flatlistRef = useRef();

        
    const sendMessage =  async (e) => {
        if(message) {
            if(isReply){
                await feedsRef.add({
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    likes: 0,
                    reply: {
                        id: replyId,
                        name: replyName,
                        message: replyMess,
                        messageId: replyDoc
                    },
                    roomid: props.route.params.roomId,
                    sender: {
                        id: uid.uid,
                        name: uid.email
                    },
                    text: message
                });
            } else {
                await feedsRef.add({
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    likes: 0,
                    reply: '',
                    roomid: props.route.params.roomId,
                    sender: {
                        id: uid.uid,
                        name: uid.email
                    },
                    text: message
                });
            }
            setMessage('');
            setIsReply(false);
        }
        
    
    }
    
    

    const chooseReply = (messid, repid, repname) => {
        setReplydoc(messid);
        feeds.forEach(item => {
            if(item.id === messid) {
                setReplyMess(item.text);
            }
        })
        setReplyId(repid);
        setReplyName(repname);
        setIsReply(true);
    }

    const cancelReply = () => {
        setReplydoc('');
        setReplyMess('');
        setReplyId('');
        setReplyName('');
        setIsReply(false);
    }

    const scrollFunc = () => {
        if(typeof flatlistRef.current !== 'undefined') {
            flatlistRef.current.scrollToEnd();
        }
    }

    return (
        <View style={styles.container}>


            <Text style={styles.texttitle}>{props.route.params.roomName}</Text>

                
            <View style={styles.feedsArea}>
                <FlatList ref = {flatlistRef} onContentSizeChange = {scrollFunc} data = {feeds} keyExtractor = {item => item.id} renderItem = {(item) => (
                    <FeedComponent chooseReply = {chooseReply} id = {item.item.id} text = {{id: item.item.sender.id, name: item.item.sender.name}} nameAnswer = {item.item.reply.message ? item.item.reply.message : ''} answer = {item.item.text} countBtn = {item.item.likes} />
                )} />
                {/* <Button title = "show" onPress = {() => console.log(flatlistRef)} /> */}
            </View>
            
            {isReply?
                <View>
                    <TouchableOpacity onPress = {cancelReply}>
                        <Text>{replyMess}</Text>
                    </TouchableOpacity>
                </View>
            :
            <Text></Text>
            }
            
            <View style = {styles.viewbottom}>
                
                
                    <TextInput style = {styles.input} placeholder = "Type a message" value = {message} onChangeText = {text => setMessage(text)} />
                    <TouchableOpacity style = {styles.sendbtn} onPress = {sendMessage}>
                        <Text style = {styles.sendbtntext}>&#10140;</Text>
                    </TouchableOpacity>
                
            </View>
            
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
    feedsArea:{
        marginTop: 32,
        marginBottom: 32,
        flex: 1,
        flexDirection: 'column',        
    },
    texttitle: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ACACAC',
        textAlign: "left"
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
export default Feed;