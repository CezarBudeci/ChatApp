import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileBlock}>
        <View style={styles.profileName}>
          <Text style={styles.header}> Profile69 </Text>
        </View>
        <View style={styles.profileComentLvl}>
          <Text style={styles.contentText}> Comentor lvl 4</Text>
        </View>
        <View style={styles.profilePosts}>
          <Text style={[styles.contentText, styles.posts]}>
            1567 {"\n"} Posts
          </Text>
          <Text style={[styles.contentText, styles.earnings]}>
            90 {"\n"} Earned
          </Text>
        </View>
      </View>
      <View style={styles.profileAddFriendBtn}>
        <TouchableOpacity style={styles.btnAddFriend}>
          <Text color={"#fffff"}>add friends</Text>
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
});

export default ProfileScreen;
