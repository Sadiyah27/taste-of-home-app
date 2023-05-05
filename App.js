import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import React from 'react';

//import * as Linking from 'expo-linking'; 

//import {BarCodeScanner} from 'expo-barcode-scanner';
const Stack = createNativeStackNavigator();



export default function App() {

  return (
    
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'Taste of Home', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
        name='Second'
        component={SecondScreen}
        options={{title: 'My Recipes', headerTitleAlign: 'center'}}
        
        />
        <Stack.Screen
        name='Third'
        component={ThirdScreen}
        options={{title: 'Share', headerTitleAlign: 'center'}}
        
        />
       <Stack.Screen
        name='Fourth'
        component={FourthScreen}
        options={{title: 'Scan the QR Code', headerTitleAlign: 'center'}}
        
        />


      </Stack.Navigator>
    </NavigationContainer>
    

  );
}


