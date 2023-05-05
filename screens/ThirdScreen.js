import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableWithoutFeedback, Image, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

export default function ThirdScreen({navigation}) {


const localImage = require("../assets/background.png");

return (
  < ImageBackground source={localImage} resizeMode="cover" style={styles.image}>

    <View style={styles.share}>
    
    <Text style={{fontWeight: 'bold', fontSize:20}}>Tag @taste_of_home ! </Text>
    
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <View style={styles.icon}>

  <Icon onPress={() => Linking.openURL('https://www.instagram.com')}
  name="instagram"
  size={100}
  color='#f5a207'/>

      <Text></Text>
    <Text></Text>

    <Icon onPress={() => Linking.openURL('https://www.snapchat.com')}
  name="snapchat-square"
  size={100}
  color='#f5a207'/>

      <Text></Text>
    <Text></Text>

    <Icon onPress={() => Linking.openURL('https://www.facebook.com')}
  name="facebook-square"
  size={100}
  color='#f5a207'/>

      <Text></Text>
    <Text></Text>

    <Icon onPress={() => Linking.openURL('https://www.twitter.com')}
  name="twitter-square"
  size={100}
  color='#f5a207'/>
  </View>
  </View>

    <StatusBar style="auto" />
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
  share: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
