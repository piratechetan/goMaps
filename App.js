import React,{Component,useState,useRef} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Pressable
} from 'react-native';


const {width,height} = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import RNGooglePlaces from 'react-native-google-places';
import Home from './src/components/Home/index';
const App = () => {
  

  return (
      <View style={styles.maincontainer}>
        <Home/>
       </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 
  maincontainer:{
    flex:1,
    justifyContent:'flex-end'
  },
  bottomcontainer: {
    width:width,
    height:height/3,
    backgroundColor:'#05120F',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  centeredcontainer:{
    borderRadius:20,
    width:width-40,
    height:height/4,
    backgroundColor:'#040505'
  },
  profilepic:{
    width:40,
    height:40,
    backgroundColor:'#fff',
    borderRadius:40
  },
  profilepic1:{
    width:42,
    height:42,
    backgroundColor:'#0B2C25',
    justifyContent:'center',
    alignItems:'center',
    
    borderRadius:20,
    marginRight:15
  },
  
});

export default App;
