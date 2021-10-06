import React from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.commentLvlBox}>
        <Text style={styles.commentText}>Commenter level 3</Text>
      </View>
      <View style={styles.pointsField1}>
        <Text>1568</Text>
        <Text>975</Text>
        <Text>90</Text>
      </View>
      <View style={styles.pointsField2}>
        <Text>Posts</Text>
        <Text>Points</Text>
        <Text>Earned</Text>
      </View>
      <View style={styles.btnField}>
        <TouchableOpacity>
          <Text>Show Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.editInputs}>
        <TextInput
          style={styles.inputsFields}
          placeholder="Profile69"
        ></TextInput>
        <View style={styles.switchBtn}>
          <Text style={styles.switchText}> Anonymous mode </Text>
          <Switch trackColor={{ false: "#ACACAC", true: "black" }} />
        </View>
        <TextInput style={styles.inputsFields} placeholder="Email"></TextInput>
        <TextInput
          style={styles.inputsFields}
          placeholder="Password"
        ></TextInput>
      </View>
      <View style={styles.delProfile}>
        <TouchableOpacity style={styles.btnDelProf}>
          <Text style={styles.btnText}>Delete Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    // alignContent: "center",
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
  },
  commentText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  pointsField1: {
    paddingTop: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },

  pointsField2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },

  btnField: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    alignContent: "stretch",
  },

  editInputs: {
    paddingLeft: "10%",
    paddingRight: "10%",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
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

  delProfile: {
    paddingBottom: "10%",
  },

  btnDelProf: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    width: 286,
    backgroundColor: "#344955",
    opacity: 100,
    borderRadius: 4,
  },
  btnText: {
    textTransform: "uppercase",
    fontSize: 14,
    color: "white",
  },
});

export default EditProfile;
