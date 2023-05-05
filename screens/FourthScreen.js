import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// I used the video https://www.youtube.com/watch?v=3mMyd3r2LRc&list=PLO3Dk6jx9EITZ1EMC3eUYDEx9w13dNm-X&index=18 
// to create the scan function.

export default function FourthScreen(){

const [hasPermission, setHasPermission] = useState(null);
const [scanned, setScanned] = useState(false);

useEffect(() => {
  (async () => {
    const {status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status ==='granted');
  })();
}, []);

const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned!`);
};

if (hasPermission === null) {
  return <Text>Requesting for camera permission</Text>;
}
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}

return (
  <View style={styles.container}>
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {scanned && <Button color="orange" title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
},
});

























































// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, ImageBackground, TouchableWithoutFeedback, Image, SafeAreaView, Alert } from 'react-native';



// export default function FourthScreen({navigation}) {

  
  
// const localImage = require("../assets/background.png");

// return (
//   < ImageBackground source={localImage} resizeMode='repeat' style={styles.container}>
  

    


//     <StatusBar style="auto" />
//   </ImageBackground>
// );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// const [hasPermission, setHasPermission] = React.useState(false);
// const [scanData, setScanData] = React.useState();

// useEffect(() => {
//   (async() => {
//     const {status} = await BarCodeScanner.requestPermissionsAsync();
//     setHasPermission(status ==='granted');
//   });
// }, []);

// if (!hasPermission) {
//   return (
//     <View style={StyleSheet.container}>
//       <Text>Please grant permission.</Text>
//     </View>
//   );
// }

