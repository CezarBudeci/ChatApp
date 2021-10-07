import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../firebase';
import firebase from 'firebase';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";


function FeedComponent(props) {
    const feedsRef = firestore.collection('chatroomfeeds');
    const[likes, setLikes] = useState(props.countBtn+1);
    
    useEffect(() => {
        setLikes(props.countBtn + 1);
    }, [props.countBtn]);

    const addLike = (id) => {
        setLikes(likes + 1)
        feedsRef.doc(id).set({
            likes: likes
        }, { merge: true });
       
    }

    return(
        <View style = {styles.container}>

            <View style={styles.messageView}>

                <TouchableOpacity style = {styles.sendbtn} onPress = {() => addLike(props.id, props.countBtn)}>
                    <Text style = {styles.buttonText}>{props.countBtn}</Text>
                </TouchableOpacity>
                <View style={styles.nameView}>              
                    <Text style = {styles.name}>{props.text.name}:</Text>
                    {props.nameAnswer ?
                        <Text style = {styles.nameAnswer}>{props.nameAnswer}&#62;</Text>
                    :
                    <Text></Text>
                    }
                    
                </View>
                <TouchableOpacity onPress = {() => props.chooseReply(props.id, props.text.id, props.text.name)}>
                    <Text style = {styles.answer}>{props.answer}</Text>
                </TouchableOpacity>
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