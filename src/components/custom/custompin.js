import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
const CustomBtn = () => {
    return (
    <View style={styles.toplayer}>
        <View style={styles.btnStyle}></View>
     </View>
    );
};

const styles = StyleSheet.create({
    toplayer:{
        width:20,
        height:20,
        backgroundColor:'#EB7F01',
        opacity:0.5,
        alignSelf:'center',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
        btnStyle: {
            width:10,
            height:10,
            backgroundColor:'#EB7F01',
            alignSelf:'center',
            borderRadius:5
        }
});


export default CustomBtn;