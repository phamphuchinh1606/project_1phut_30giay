import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window');

var LoginStyle = StyleSheet.create({
    headerBody:{
        alignItems: 'center'
    },
    textTitle:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    content:{
        paddingTop: height/15,
        paddingLeft: height/25,
        paddingRight: height/25
    },
    textInput:{
        height: 50,
        backgroundColor: '#fff',
        marginBottom:20,
        borderRadius: 20,
        paddingLeft: 15
    },
    textButton:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    footer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F8F8FF'
    },
    footerButton:{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        width: width/3

    }
});

export default LoginStyle;