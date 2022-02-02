import {StyleSheet,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

export default StyleSheet.create({
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
})