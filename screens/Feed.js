import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, CheckBox, Picker, TouchableOpacity, ScrollView } from 'react-native';
import FeedComponent from '../components/FeedComponent';

function Feed (){

return (
<View style={styles.container}>


<Text style={styles.texttitle}>Cars</Text>

    
<View style={styles.feedsArea}>
    <ScrollView>
    <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "bbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {24}/>
     <FeedComponent text = "Cezar" answer = "Loooong answer teeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {54}/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "Loooong answer teeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = "+"/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "Loooong answer teeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {77}/>
     <FeedComponent text = "Cezar" answer = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {11}/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "aaaaaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {87}/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {27}/>
     <FeedComponent text = "Cezar" answer = "Loooong answer teeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {99}/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "Loooong answer teeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {114}/>
     <FeedComponent text = "Cezar" answer = "Loooong answer teeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {55}/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {54}/>
     <FeedComponent text = "Cezar" nameAnswer = "Jozef" answer = "aaaaaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaast" countBtn = {23}/>

    </ScrollView>

</View>

<View style = {styles.viewbottom}>
                <TextInput style = {styles.input} placeholder = "Type a message" />
                <TouchableOpacity style = {styles.sendbtn}>
                    <Text style = {styles.sendbtntext}>&#10140;</Text>
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
        paddingBottom: 64,
        paddingLeft: 32,
        paddingRight: 32,
        textAlign: 'center',
        alignContent: "center",
    },
    feedsArea:{
        marginTop: 32,
        marginBottom: 32,
        flex: 1,
        flexDirection: 'column',        
    },
    texttitle: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ACACAC',
        textAlign: "left"
    },
    viewbottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        color: '#ACACAC',
        fontSize: 14,
        lineHeight: 18,
        height: '100%',
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#ACACAC',
    },
    sendbtn: {
        height: 48,
        width: 48,
        backgroundColor: '#344955',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendbtntext: {
        fontSize: 14,
        color: 'white',
    }

});
export default Feed;