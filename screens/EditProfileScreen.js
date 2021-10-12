import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Picker,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../firebase";
import firebase from "firebase";
import { updatePassword } from "firebase/auth";
import { Button } from "react-native-paper";
import * as SecureStore from "expo-secure-store";


function EditProfileScreen({ navigation }) {
  const uid = auth.currentUser;
  const user = firebase.auth().currentUser;
  const currentUserID = uid.uid;
  const currentUserEmail = uid.email;
  const [totalLikes, setTotalLikes] = useState(0);

  const [isPrivate, setPrivate] = useState(false);
  const toggleSwitch = () => setPrivate((previousState) => !previousState);

  const [username, setUsername] = useState(isPrivate ? "" : "Private!");
  const [email, setEmail] = useState(currentUserEmail);
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [numberOfFeeds, setNumberOfFeed] = useState(0);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [earned, setEarned] = useState(null);
  const isMountedRef = useRef(null);

  // Working
  const editProfile = () => {

    firebase
      .firestore()
      .collection("users")
      .doc(currentUserID)
      .update({
        privateUser: !isPrivate,
        userEmail: email,
        // userID: currentUserID,
        userName: username,
        userLevel: userLevel,
        // userPassword: password,
        // numberOfFeeds: 0,
        // numberOfLikes: 0,
        country: country,
      })
      .then(() => {
        console.log("User updated!");
      });
    if (password) {
      uid
        .updatePassword(password)
        .then(() => console.log("success"))
        .catch((err) => console.error(err));
      setPassword("");
    }
  };

  // Working
  const getProfileData = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUserID)
      .get()
      .then((documentSnapshot) => {
        console.log("User exists: ", documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log("User data: ", documentSnapshot.data());
          setPrivate(!documentSnapshot.get("privateUser"));
          setUsername(documentSnapshot.get("userName"));
          setEmail(documentSnapshot.get("userEmail"));
          setPassword(documentSnapshot.get("userPassword"));
          setUserLevel(documentSnapshot.get("userLevel"));
          setCountry(documentSnapshot.get("country"));
        }
      });
  };

  const navigatingOut = () => {
    navigation.replace("Start");
    navigation.reset({
      index: 0,
      routes: [{ name: "Start" }],
    });
  }

  //Working
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        SecureStore.deleteItemAsync("userSession")
          .then((res) => console.log("success"))
          .catch((err) => console.error(err));
        console.log("You are signed out! Active user:", auth.currentUser);
        navigatingOut();
      })
      .catch((err) => alert(err.message));


  };
  //Working
  const deleteUser = () => {
    user
      .delete()
      .then(function () {
        console.log("User account was deleted!:", auth.currentUser);
      })
      .catch(function (error) {
        // An error happened.
        alert(error.message);
      });
  };

  //Infinite loop?
  const checkStatus = (totalLikes) => {
    // switch (totalLikes) {
    //   case totalLikes > 0 && totalLikes < 5:
    //     setUserLevel("Welcome user!");
    //     break;
    //   case totalLikes > 5 && totalLikes < 11:
    //     setUserLevel("This is just beginning, keep going!");
    //     break;
    //   case totalLikes > 10 && totalLikes < 16:
    //     setUserLevel("Are you start to like it?");
    //     break;
    //   case totalLikes > 15 && totalLikes < 21:
    //     setUserLevel("Comment forewer!");
    //     break;
    //   default:

    if (totalLikes >= 0 && totalLikes < 5) {
      setUserLevel("level1");
      editProfile();
    } else if (totalLikes >= 5 && totalLikes < 10) {
      setUserLevel("level2");
      editProfile();
    } else if (totalLikes >= 10 && totalLikes < 20) {
      setUserLevel("level3");
      editProfile();
    }

    // }
    console.log("Likes + Level" + totalLikes + " " + userLevel);
  };

  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current) {
      checkStatus(totalLikes);
    }
    //  console.log(password);
    return () => isMountedRef.current = false;
  }, [totalLikes]);

  const earnedCalculation = () => {
    setEarned(numberOfFeeds / numberOfLikes);
  };
  useEffect(() => {
    earnedCalculation();
  }, []);

  useEffect(() => {
    getProfileData();
  }, []);

  const deleteUserAlert = () =>
    Alert.alert(
      "Delete!",
      "Are you sure that you want to delete your account? This process cannot be undone !",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "DELETE",
          onPress: () => {
            deleteUser;
          },
        },
      ],
      { cancelable: false }
    );

  // function randomUsername() {
  //   let text = "";
  //   let possible =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for (let i = 0; i < 10; i++)
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));

  //   return "Random" + text;
  // }

  return (
    <View style={styles.container}>
      <View style={styles.commentLvlBox}>
        <Text style={styles.commentText}>{userLevel}</Text>
      </View>

      <View style={styles.statusView}>
        <View style={styles.statusViewInner}>
          <Text style={styles.numberStats}>{numberOfFeeds}</Text>
          <Text style={styles.textStats}>Posts</Text>
        </View>
        <View style={styles.statusViewInner}>
          <Text style={styles.numberStats}>{numberOfLikes}</Text>
          <Text style={styles.textStats}>Points</Text>
        </View>
        <View style={styles.statusViewInner}>
          <Text style={styles.numberStats}>{earned}</Text>
          <Text style={styles.textStats}>Earned</Text>
        </View>
      </View>

      <View style={styles.editInputs}>
        <TextInput
          style={styles.inputsFields}
          placeholder="Profile69"
          onChangeText={(text) => setUsername(text)}
          editable={!isPrivate}
          maxLength={25}
          value={!isPrivate ? username : "Private"}
        ></TextInput>

        <View style={styles.switchBtn}>
          <Text style={styles.switchText}> Anonymous mode </Text>
          <Switch
            trackColor={{ false: "#ACACAC", true: "black" }}
            thumbColor={isPrivate ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isPrivate}
          />
        </View>
        <TextInput
          style={styles.inputsFields}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        ></TextInput>
        <TextInput
          style={styles.inputsFields}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
        ></TextInput>

        <View style={styles.pickerContainer}>
          <Text style={styles.textview}></Text>
          <Picker
            country={country}
            style={{
              color: "#ACACAC",
              height: "auto",
              width: "100%",
              fontSize: 14,
              fontFamily: "Roboto",
            }}
            onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
          >
            <Picker.Item style={styles.textview} label="Country" value="country" />
            <Picker.Item style={styles.textview} label="Finland" value="fi" />
            <Picker.Item style={styles.textview} label="Norway" value="nr" />
            <Picker.Item style={styles.textview} label="Slovakia" value="sk" />
            <Picker.Item style={styles.textview} label="Czechia" value="cz" />
            <Picker.Item style={styles.textview} label="Canada" value="ca" />
            <Picker.Item style={styles.textview} label="China" value="ch" />
            <Picker.Item style={styles.textview} label="Usa" value="us" />
            <Picker.Item style={styles.textview} label="Great Britain" value="gb" />
            <Picker.Item style={styles.textview} label="Sweden" value="sw" />
            <Picker.Item style={styles.textview} label="Moldava" value="ml" />
          </Picker>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View>
          <TouchableOpacity style={styles.btnLogOut} onPress={signOut}>
            <Text style={[styles.btnText, { color: "black" }]}>Log out</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnSave} onPress={editProfile}>
            <Text style={styles.btnText}>Save profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <TouchableOpacity style = {{borderColor: 'red', borderWidth: 1, width: '100%', height: 40}} onPress = {() => setTotalLikes(totalLikes + 1)}>
        <Text>Add like</Text>
      </TouchableOpacity> */}
      <View style={styles.deleteView}>
        <TouchableOpacity onPress={deleteUserAlert}>
          <Text
            style={[
              styles.textBtn,
              {
                color: "red",
                width: "40%",
              },
            ]}
          >
            Delete acount
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingBottom: 32,
    paddingLeft: 32,
    paddingRight: 32,
    textAlign: "center",
    alignContent: "center",
  },

  commentLvlBox: {
    // paddingBottom: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#CDCDCD",
    height: "10%",
    width: "100%",
    textAlignVertical: "center",
    borderRadius: 4,
  },
  commentText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  statusView: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 32,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statusViewInner: {
    flexDirection: "column",
    alignContent: "space-around",
  },
  numberStats: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "black",
  },

  textStats: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#ACACAC",
    textAlign: "center",
  },
  textBtn: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#344955",
    textTransform: "uppercase",
  },

  btnField: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    alignContent: "stretch",
  },

  editInputs: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
    marginBottom: 32,
  },

  switchBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  switchText: {
    color: "#ACACAC",
  },

  inputsFields: {
    borderBottomWidth: 1,
    borderColor: "#ACACAC",
  },

  btnSave: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    backgroundColor: "#344955",
    opacity: 100,
    borderRadius: 4,
  },
  btnLogOut: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    backgroundColor: "#344955",
    opacity: 0.3,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 1,
  },
  btnText: {
    textTransform: "uppercase",
    fontSize: 14,
    color: "white",
    paddingLeft: 16,
    paddingRight: 16,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteView: {
    paddingTop: 32,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#ACACAC",
  },
  textview: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    color: "#ACACAC",
  },
});

export default EditProfileScreen;
