import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { View,Image,Text } from 'react-native';
const BottomBar = () => {
  return(
      <View>
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
              <View style={{width:24,marginLeft:10}}>
              <Entypo name="location-pin" size={25} color={"red"}/>
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center'}}/>
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center',marginTop:3}}/>
              </View>
              <View style={{width:24,marginLeft:10,marginTop:25}}>
              <View style={{width:20,height:20,backgroundColor:'#EB7F01',opacity:0.5,alignSelf:'center',borderRadius:15,justifyContent:'center',alignItems:'center'}}>
              <View style={{width:10,height:10,backgroundColor:'#EB7F01',alignSelf:'center',borderRadius:5}}></View>
              </View>
      
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center'}}/>
              <View style={{width:1,height:5,backgroundColor:'#65B77C',alignSelf:'center',marginTop:3}}/>
              </View>
            </View>
          </View>
        </View>
      </View>
  )
};

export default BottomBar;
