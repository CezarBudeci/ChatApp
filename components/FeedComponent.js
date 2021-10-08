import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import firebase from "firebase";
import { auth } from '../firebase';




function FeedComponent(props) {
    const[likes, setLikes] = useState(props.countBtn+1);
    const[isPrivate, setIsPrivate] = useState((() => {if(props.text.name !== 'Private') {return true;} else {return false;}}));

    
    
    useEffect(() => {
        setLikes(props.countBtn + 1);
        
    }, [props.countBtn]);

    const getLink = (id) => {
        if(props.private) {
            return `https://chatapp-a1d56-default-rtdb.europe-west1.firebasedatabase.app/privatechatrooms/${props.roomId}/messages/${id}/.json`;
        } else {
            return `https://chatapp-a1d56-default-rtdb.europe-west1.firebasedatabase.app/publicchatrooms/${props.roomId}/messages/${id}/.json`;
        }
    }

    const addLike = (id) => {
        setLikes(likes + 1);
        
        fetch(getLink(id), {
            method: 'PATCH',
            body: JSON.stringify({
                likes: likes
            })
        })
        .then(res => {props.updateLikes();
            
            props.fetchMessages();})
        .catch(err => console.error(err));
        
        
    }

    return(
        <View style = {styles.container}>

            <View style={styles.messageView}>

                <TouchableOpacity style = {styles.sendbtn} onPress = {() => addLike(props.id, props.countBtn)}>
                    <Text style = {styles.buttonText}>{props.countBtn}</Text>
                </TouchableOpacity>
                <View style={styles.nameView}>
                    {isPrivate?
                    <TouchableOpacity onPress = {() => {if(props.text.id !== auth.currentUser.uid) {props.navigation.navigate('SomeProfile', { uid: props.text.id })}}}>              
                        <Text style = {styles.name}>{props.text.name}:</Text>
                    </TouchableOpacity>:
                    <Text style = {styles.name}>{props.text.name}:</Text>}
                    
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