import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import Room from "./Room";

function PrivateRooms(props) {
  const [chatrooms, setChatrooms] = useState([]);

  if (chatrooms) {
    chatrooms.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  useEffect(() => {
    fetchRooms();
  }, [chatrooms]);

  const fetchRooms = () => {
    fetch(
      "https://chatapp-a1d56-default-rtdb.europe-west1.firebasedatabase.app/privatechatrooms/.json"
    )
      .then((res) => res.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) =>
      Object.defineProperty(item, "id", { value: keys[index] })
    );
    setChatrooms(valueKeys);
  };

  return (
    <FlatList
      style={styles.filteredArea}
      data={chatrooms}
      keyExtractor={(item) => item.id}
      renderItem={(item) =>
        item.item.country == "ca" ? (
          <Room
            private={true}
            roomName={item.item.name}
            roomId={item.item.id}
            navigation={props.navigation}
          />
        ) : (
          <View></View>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  filteredArea: {
    height: "100%",
    flexDirection: "column",
    marginBottom: 32,
  },
  borderArea: {
    borderBottomWidth: 1,
    borderColor: "#ACACAC",
    width: "80%",
    alignSelf: "center",
    paddingTop: 16,
  },
  letterFiltered: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#ACACAC",
    textAlign: "left",
    paddingBottom: 8,
  },
});
export default PrivateRooms;
