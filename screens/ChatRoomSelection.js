import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FilteredRooms from "../components/FilteredRooms";
import Room from "../components/Room";
import { auth } from "../firebase";

function ChatRoomSelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Chat rooms</Text>

      <View style={styles.viewTop}>
        <TextInput style={styles.input} placeholder="Search for a room" />
      </View>

      <View style={styles.roomsArea}>
        {/* <ScrollView> */}
        {/* This need to be done more efficently */}
        <FilteredRooms letter="C" navigation={navigation} />

        {/* </ScrollView> */}
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
    textAlign: "center",
    alignContent: "center",
  },
  roomsArea: {
    marginTop: 32,
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "green",
  },
  texttitle: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#ACACAC",
    textAlign: "left",
    paddingBottom: 32,
  },
  viewTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    color: "#ACACAC",
    fontSize: 14,
    lineHeight: 18,
    height: "100%",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ACACAC",
  },
});
export default ChatRoomSelection;
