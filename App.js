import React from 'react';
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
} from 'react-native';


import MapView,{PROVIDER_GOOGLE,UrlTile,} from 'react-native-maps';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {mapDarkStyle} from './src/assets/model/mapstyle'
import BottomBar from './src/components/BottomBar.js';
const {width,height} = Dimensions.get('window')
const App = () => {
 

  return (
      <View style={styles.maincontainer}>
        <MapView
      //  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       customMapStyle={mapDarkStyle}
       region={{
         latitude: 13.0547712,
         longitude: 80.1931264,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       
     </MapView>
        <BottomBar/>
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
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'black'
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
  }
  
});

export default App;
