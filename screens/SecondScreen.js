import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableWithoutFeedback, Image, SafeAreaView, Alert } from 'react-native';
import { Linking } from 'react-native';
import React, { Component } from 'react';

export default function SecondScreen({navigation}) {
  
const localImage = require("../assets/background.png");

// const handlePress = () => Alert.alert("Turmeric","Is yellow",[
//   {text: "Close"}]);
// const buttonPress = () => Alert.alert("Turmeric","Is yellow",[
//   {text: "Close"}]);

return (
  < ImageBackground source={localImage} resizeMode="cover" style={styles.image}>
    

    <Button 
    onPress={() => Linking.openURL('https://www.doc.gold.ac.uk/usr/157/chanamasala')}
    color="orange"
    title="Chana Masala" 
    />
    <Text></Text>
    <Button 
    onPress={() => Linking.openURL('https://www.doc.gold.ac.uk/usr/157/masalachaat')}
    color="orange"
    title="Masala Chaat" 
    />

      <Text></Text>
<Button 
    onPress={() => Linking.openURL('https://www.doc.gold.ac.uk/usr/157/prawnbhuna')}
    color="orange"
    title="Prawn Bhuna" 
    />
      <Text></Text>
<Button 
    onPress={() => Linking.openURL('https://www.doc.gold.ac.uk/usr/157/shorsheilish')}
    color="orange"
    title="Shorshe Ilish" 
    />
      <Text></Text>
<Button 
    onPress={() => Linking.openURL('https://www.doc.gold.ac.uk/usr/157/firni')}
    color="orange"
    title="Firni" 
    />

    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>

    <Button 
   
    color="teal"
    title="BUY AGAIN" 
    />

    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
    <Text>
    </Text>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
