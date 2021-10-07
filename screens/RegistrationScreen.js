import React, { createRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";

function Registration({ navigation }) {
  const [email, setEmail] = useState("");
  const [psswrd, setPsswrd] = useState("");
  const [confirmPsswrd, setConfirmPsswrd] = useState("");
  const [country, setCountry] = useState("");

  const handleRegistration = () => {
    auth
      .createUserWithEmailAndPassword(email, psswrd)
      .then((userCredentials) => {
        const user = userCredentials.user;
        user.updateProfile({
          country: "country",
        });
        console.log(user.email, user.country);
      })
      .then(() => {navigation.goBack()})
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.regHeader}>
        <Text style={styles.headerText}>Registration</Text>
      </View>
      <View style={styles.regForm}>
        <TextInput
          style={styles.inputFields}
          value={email}
          textTransform={"lowercase"}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          value={psswrd}
          onChangeText={(text) => setPsswrd(text)}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Re-Password"
        ></TextInput>
        <TextInput
          style={styles.inputFields}
          placeholder="Home Country"
          value={country}
          onChangeText={(text) => setCountry(text)}
        ></TextInput>
        <TouchableOpacity style={styles.regBtn} onPress={handleRegistration}>
          <Text style={styles.btntext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 64,
    marginTop: 40,
    // borderWidth: 1,
    // borderColor: "black",
  },
  regHeader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ACACAC",
  },

  regForm: {
    paddingLeft: "10%",
    paddingRight: "10%",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
    alignItems: "center",
  },
  inputFields: {
    fontSize: 14,
    borderColor: "#ACACAC",
    borderBottomWidth: 1,
    alignSelf: "stretch",
  },
  regBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    width: 286,
    backgroundColor: "#344955",
    opacity: 100,
    borderRadius: 4,
  },
  btntext: {
    color: "white",
    textTransform: "uppercase",
  },
});

export default Registration;
