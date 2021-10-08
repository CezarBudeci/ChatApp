import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <View>
          <Text style={styles.nicknameTxt}>Nickname</Text>
        </View>
        <View style={styles.commenterView}>
          <Text style={styles.commenterTxt}>Level something</Text>
        </View>
        <View style={styles.statusView}>
          <View style={styles.statusViewInner}>
            <Text style={styles.numberStats}>44</Text>
            <Text style={styles.textStats}>Posts</Text>
          </View>
          <View style={styles.statusViewInner}>
            <Text style={styles.numberStats}>8</Text>
            <Text style={styles.textStats}>Earned</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.btnAddFriend}>
          <Text style={styles.btnText}>Add friend</Text>
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
    paddingBottom: 32,
    paddingLeft: 32,
    paddingRight: 32,
    textAlign: "center",
    justifyContent: "space-evenly",
  },
  profileBlock: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  nicknameTxt: {
    paddingBottom: 32,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },

  commenterView: {
    paddingTop: 64,
    paddingBottom: 64,
    backgroundColor: "rgba(52, 73, 85, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    textAlignVertical: "center",
    borderRadius: 4,
  },
  commenterTxt: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  statusView: {
    width: "100%",
    paddingTop: 32,
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
  buttonArea: {
    justifyContent: "flex-end",
  },
  btnAddFriend: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    backgroundColor: "#344955",
    borderRadius: 4,
  },
  btnText: {
    textTransform: "uppercase",
    fontSize: 14,
    color: "white",
  },
});

export default ProfileScreen;
