import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firebase from "firebase";
import { auth } from '../firebase';

function ProfileScreen(props) {
  
  
  const[level, setLevel] = useState(null);
  const[username, setUsername] = useState(null);
  const[feedNr, setFeedNr] = useState(null);
  const[fetchedLikes, setFetchedLikes] = useState(null);
  const[currentName, setCurrentName] = useState(null);
  
  const getProfileData = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(props.route.params.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setLevel(documentSnapshot.get('userLevel'));
          setUsername(documentSnapshot.get("userName"));
          setFeedNr(documentSnapshot.get('numberOfFeeds'));
          setFetchedLikes(documentSnapshot.get('numberOfLikes'));
        }
    });
  }

  const setCurrent = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          
          setCurrentName(documentSnapshot.get('userName'));
        }
    });
  }


  getProfileData();
  setCurrent();

  const sendFriendRequest = () => {
    firebase.firestore().collection('users').doc(props.route.params.uid).collection('friendRequests').add({uid: auth.currentUser.uid, name: currentName});
    props.navigation.goBack();
  }

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileBlock}>
        <View style={styles.profileName}>
          <Text style={styles.header}> {username} </Text>
        </View>
        <View style={styles.profileComentLvl}>
          <Text style={styles.contentText}> {level} </Text>
        </View>
        <View style={styles.profilePosts}>
          <Text style={[styles.contentText, styles.posts]}>
            {feedNr} {"\n"} Posts
          </Text>
          <Text style={[styles.contentText, styles.earnings]}>
            {fetchedLikes} {"\n"} Earned
          </Text>
        </View>
      </View>
      <View style={styles.profileAddFriendBtn}>
        <TouchableOpacity style={styles.btnAddFriend} onPress = {sendFriendRequest}>
          <Text style = {styles.btnAddFriendText}>add friend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    alignContent: "center",
  },

  header: {
    fontSize: 24,
    // fontFamily: "Roboto Condensed",
    fontWeight: "bold",
    color: "black",
  },

  contentText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  profileBlock: {
    paddingBottom: 32,
    flex: 4,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },

  profileName: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  profileComentLvl: {
    // paddingBottom: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#CDCDCD",
    height: 151,
    width: 286,
    textAlignVertical: "center",
  },

  profilePosts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 32,
    alignSelf: "stretch",
  },

  posts: {
    alignContent: "flex-start",
  },

  earnings: {
    alignContent: "flex-end",
    alignItems: "center",
  },

  profileAddFriendBtn: {
    flex: 1,
  },

  btnAddFriend: {
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    width: 286,
    fontSize: 14,
    textTransform: "uppercase",
    backgroundColor: "#344955",
    opacity: 100,
    borderRadius: 4,
  },
  btnAddFriendText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
  }
});

export default ProfileScreen;
