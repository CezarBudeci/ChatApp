import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import FriendComp from "../components/friendcomp";

function FriendList() {

    return(
        <View style = {styles.container}>
            <View style = {styles.textview}>
                <Text style = {styles.texttitle}>Friends</Text>
            </View>
            <SafeAreaView style = {styles.safearea}>
                <ScrollView>
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                    <FriendComp />
                </ScrollView>
            </SafeAreaView>
            <View style = {styles.viewbottom}>
                
            </View>
            <StatusBar style = 'auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginBottom: 32,
        marginLeft: 32,
        marginRight: 32,
        flex: 1,
    },
    textview: {
        marginBottom: 32,
    },
    texttitle: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ACACAC'
    },
    safearea: {
        height: '90%',
        marginBottom: 32,
    },
});

export default FriendList;