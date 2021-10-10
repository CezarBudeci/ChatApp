import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


function FriendrequestComp(props) {

    return(
        <View style = {{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{props.name}</Text>
            <TouchableOpacity onPress = {() => props.decline(props.id)}>
                <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => props.accept(props.id, props.acceptId, props.receiverId, props.acceptName, props.name)}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FriendrequestComp;