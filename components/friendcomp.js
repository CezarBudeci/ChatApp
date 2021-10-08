import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function FriendComp() {
  return (
    <View style={styles.viewfriend}>
      <Text style={styles.textperson}>Samantha</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deletebtn}>
          <Text style={styles.textbtn1}>delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.openbtn}>
          <Text style={styles.textbtn2}>&#10140;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewfriend: {
    borderColor: "#ACACAC",
    borderBottomWidth: 1,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textperson: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "black",
    fontWeight: "bold",
    paddingBottom: 8,
    paddingTop: 8,
    textAlignVertical: "center",
    marginBottom: 1,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  deletebtn: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginBottom: 1,
  },
  textbtn1: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#344955",
    textTransform: "uppercase",
  },
  openbtn: {
    borderRadius: 4,
    backgroundColor: "#344955",
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
  },
  textbtn2: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "white",
    textTransform: "uppercase",
  },
});

export default FriendComp;
