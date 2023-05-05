import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableWithoutFeedback, Image, SafeAreaView, Alert } from 'react-native';

export default function HomeScreen({navigation}) {
    const localImage = require("../assets/background.png");
  return (
    < ImageBackground source={localImage} resizeMode="cover" style={styles.image}>
    
    <Button 
      title='Scan'
      color='orange'
      onPress={() => navigation.navigate ('Fourth')}
      />
      
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Button 
      title='My Recipes'
      color='orange'
      onPress={() => navigation.navigate ('Second')}
      />

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Button 
      title='Share'
      color='orange'
      onPress={() => navigation.navigate ('Third')}
      />

      <Text></Text>



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

  
});
