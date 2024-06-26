import React from "react";
import { StyleSheet, Text } from "react-native";


const quantidade = (props) => {
    return (
        <text style={StyleS.text}> quantidade:{props.valor} 
        {quantidade}</text>
    );
};

const StyleS = StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold'
    }
    
});

export default quantidade;