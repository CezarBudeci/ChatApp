import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/StartScreen';
import Registration from './screens/RegistrationScreen';
import CreateChatRoom from './screens/CreateChatRoom';
import ChatRoomSelection from './screens/ChatRoomSelection';
import Feed from './screens/Feed';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ChatList from './screens/Chatlist';
import FriendList from './screens/Friendlist';
import PrivateChat from './screens/Privatechat';
import ProfileScreen from './screens/ProfileScreen';
import EditProfile from './screens/EditProfileScreen';

const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();

const LoginStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name = "Login" component = {Login} options = {{ headerShown: false }} />
    <Stack.Screen name = "Registration" component = {Registration} options = {{ headerShown: false }} />
  </Stack.Navigator>);
}

const AppTabs = () => {
  return (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name = "Chatlist" component = {ChatroomList} />
    <BottomTabs.Screen name = "PrivateMessages" component = {MessagesStack} />
    <BottomTabs.Screen name = "FriendList" component = {FriendList} />
    <BottomTabs.Screen name = "ProfileScreens" component = {ProfileStack} />
  </BottomTabs.Navigator>);
}

const ChatroomList = () => {
  return(
    <Stack2.Navigator>
      <Stack2.Screen name = "Chatroomlist" component = {ChatRoomSelection} options = {{ headerShown: false }} />
      <Stack2.Screen name = "Chatroom" component = {Feed} options = {{ headerShown: false }} />
      <Stack2.Screen name = "CreateChatRoom" component = {CreateChatRoom} options = {{ headerShown: false }} />
    </Stack2.Navigator>
  );
}

const MessagesStack = () => {
  return(
    <Stack3.Navigator initialRouteName = "PrivateMessages1">
      <Stack3.Screen name = "PrivateMessages1" component = {ChatList} options = {{ headerShown: false }} />
      <Stack3.Screen name = "PrivateChat" component = {PrivateChat} options = {{ headerShown: false }} />
    </Stack3.Navigator>
  );
}

const ProfileStack = () => {
  return(
    <Stack4.Navigator>
      {/* <Stack4.Screen name = "ProfileScreen" component = {ProfileScreen} options = {{ headerShown: false }} /> */}
      <Stack4.Screen name = "EditProfile" component = {EditProfile} options = {{ headerShown: false }} />
    </Stack4.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack1.Navigator>
        <Stack1.Screen name = "Start" component = {LoginStack} options = {{ headerShown: false }} />
        <Stack1.Screen name = "App" component = {AppTabs} options = {{ headerShown: false }} />
      </Stack1.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
