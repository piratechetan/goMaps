import {StyleSheet,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')

export default StyleSheet.create({
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
  bottomheader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15
  },
  profilecontainer:{
    marginLeft:10,
    flexDirection:'row',
    alignItems:'center'
  },
  name:{
    fontSize:16,
    color:'#fff',
    marginLeft:5
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
  bottommaincontainer:{
    width:'100%',
    height:1,
    backgroundColor:'#05120F',
    marginTop:15,
    alignSelf:'center'
  },
  verticalline:{
    width:1,
    height:5,
    backgroundColor:'#65B77C',
    alignSelf:'center'
  },
  pickuplocationtitle:{
    color:'#2DAF95',
    fontSize:10,
    marginLeft:8,
    marginBottom:3
  },
  destlocationtitle:{
    color:'#556969',
    fontSize:10,
    marginLeft:8,
    marginBottom:3
  },
  feededloc:{
    color:'#FFFFFF',
    fontWeight:'600',
    fontSize:16,
    marginLeft:8
  },
  emptyloc:{
    color:'#556969',
    fontSize:16,
    marginLeft:8
  },
  destinationcontainer:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'nowrap'
  }
  
})