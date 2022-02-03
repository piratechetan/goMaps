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

import MapView,{PROVIDER_GOOGLE,Marker,AnimatedRegion} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {mapDarkStyle} from '../../assets/model/mapstyle'
import { GOOGLE_MAP_KEY } from '../../components/Constants/googleapi';
import CustomBtn from '../../components/custom/custompin';
const {width,height} = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.06;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import RNGooglePlaces from 'react-native-google-places';
import imagePath from '../Constants/imagePath'
import styles from './styles'
const Home = () => {
  const [state, setState] = useState({
    curLoc: {
      latitude: 13.033662,
      longitude: 80.184290,
    },
    
    
})
const { curLoc} = state
   const [pickuplonglat, setpickuplonglat] = useState({
      latitude: 13.033662,
      longitude: 80.184290,
   });
   const [destinationlonglat, setdestinationlonglat] = useState({
    latitude: 13.032111,
    longitude: 80.179296,
 });
   const [pickupaddress,setpickupaddress]=useState(null);
   const [destinatiobnaddress,setdestinationaddress]=useState(null);

   //pickup places 
   const openSearchModal = () =>{
     RNGooglePlaces.openAutocompleteModal()
     .then((place) => {
         console.log(place.name);
         setpickupaddress(`${place.name} ${place.address}`)
         setpickuplonglat(place.location)
     })
     .catch(error => console.log(error.message));  // error is a Javascript Error object
   }
   
   // destination places
   const openDestinationModal = () =>{
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => {
        console.log(place.name);
        setdestinationaddress(`${place.name} ${place.address}`)
        setdestinationlonglat(place.location)
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }
   

  return (
      <View style={styles.maincontainer}>
        <StatusBar barStyle='light-content' backgroundColor={'#000'}/>
        <MapView
          // remove if not using Google Maps
       style={styles.map}
       customMapStyle={mapDarkStyle}
       
       initialRegion={{
        ...curLoc,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
     > 
     { pickupaddress ? 
     destinatiobnaddress ? 
     <MapViewDirections
     origin={pickuplonglat}
     destination={destinationlonglat}
     apikey={GOOGLE_MAP_KEY} // insert your API Key here
     strokeWidth={4}
     strokeColor="#EDC126"
     
   /> :
  null : null}
        { pickupaddress ?
          <Marker.Animated coordinate={pickuplonglat}>
             <Image
                source={imagePath.icCurLoc}
                  style={{
                     width: 40,
                     height: 40,
                    }}
                    
                    />
          </Marker.Animated> :
          null
        }
        {destinatiobnaddress ? <Marker coordinate={destinationlonglat}>
        <Image
                source={imagePath.icGreenMarker}
                  style={{
                     width: 40,
                     height: 40,
                    }}
                    
                    />
        </Marker> : null }
       
     </MapView>
          <View style={styles.bottomcontainer}>
          <View style={styles.centeredcontainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
              <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../assets/PikPng.png')} style={styles.profilepic}/>
                <Text style={{fontSize:16,color:'#fff',marginLeft:5}}>Max payne</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <View style={styles.profilepic1}>
                <Feather name="mail" size={20} color={"#2DAF95"} />
                </View>
                <View style={styles.profilepic1}>
                <Feather name="phone" size={20} color={"#2DAF95"} />
                </View>
        
              </View>
            </View>
            <View style={{width:'100%',height:1,backgroundColor:'#05120F',marginTop:15,alignSelf:'center'}}/>
            <View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{width:24,marginLeft:10}}>
              <Entypo name="location-pin" size={25} color={"red"}/>
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center'}}/>
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center',marginTop:3}}/>
              </View>
        
                <Pressable
          style={styles.button}
          onPress={() => openSearchModal()}
             >
          <Text style={{color:'#2DAF95',fontSize:10,marginLeft:8,marginBottom:3}}>current location</Text>
          {pickupaddress ?
          (
            <Text style={{color:'#FFFFFF',fontWeight:'600',fontSize:16,marginLeft:8}}>{pickupaddress.length <30 ? pickupaddress : pickupaddress.slice(0,36).concat('...')}</Text>
          ):(
            <Text style={{color:'#556969',fontSize:16,marginLeft:8}}>Choose the pickup location</Text>
          )}
                
          </Pressable>
               
              </View>
              <View style={{flexDirection:'row',alignItems:'center',flexWrap:'nowrap'}}>
              <View style={{width:24,marginLeft:10,marginTop:10}}>
               <CustomBtn />
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center'}}/>
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center',marginTop:3}}/>
              </View>
              <Pressable
          style={{marginTop:20}}
          onPress={() => openDestinationModal()}
             >
          <Text style={{color:'#556969',fontSize:10,marginLeft:8,marginBottom:3}}>Next Destination</Text>
          {destinatiobnaddress ?
          (
            <Text style={{color:'#FFFFFF',fontWeight:'600',fontSize:16,marginLeft:8}}>{destinatiobnaddress.length <30 ? destinatiobnaddress : destinatiobnaddress.slice(0,36).concat('...')}</Text>
          ):(
            <Text style={{color:'#556969',fontSize:16,marginLeft:8}}>Choose the destination location</Text>
          )}
                
          </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
};

export default Home;
