import React, { useState } from "react";
import { View } from "react-native";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../firebase";
import FriendrequestComp from "../components/friendrequestcomp";
import firebase from "firebase";


function FriendRequestList(props) {
    const friendrequestsRef = firestore.collection('users').doc(auth.currentUser.uid).collection('friendRequests');
    const[friendrequests] = useCollectionData(friendrequestsRef, { idField: 'id' });
    const[username, setUsername] = useState(null);

    const getUsername = () => {
        firebase
          .firestore()
          .collection("users")
          .doc(auth.currentUser.uid)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              setUsername(documentSnapshot.get("userName"));
            }
        });
    };
    getUsername();

    const declineRequest = (id) => {
        firestore.collection('users').doc(auth.currentUser.uid).collection('friendRequests').doc(id).delete().then(() => console.log("deleted")).catch(err => console.error(err));
    }

    const acceptRequest = (id, accepterId, receiverId, accepterName, receiverName) => {
        firestore.collection('users').doc(accepterId).collection('friends').add({uid: receiverId, name: receiverName});
        firestore.collection('users').doc(receiverId).collection('friends').add({uid: accepterId, name: accepterName});
        declineRequest(id);
    }

    return(
        <View style = {{margin: 40}}>
            {friendrequests && friendrequests.map(item => <FriendrequestComp key = {item.id} name = {item.name} id = {item.id} receiverId = {item.uid} acceptId = {auth.currentUser.uid} acceptName = {username} accept = {acceptRequest} decline = {declineRequest} />)}
        </View>
    );
}


export default FriendRequestList;