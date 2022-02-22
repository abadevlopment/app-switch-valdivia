import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import Colors from '../constants/Colors'


const Buttons = ({ title, style, onPress, disabled }) => {
    return (
        // <View style={[ cardStyle, styles.cardContainer]} >
        // <View style={{...style, ...styles.cardContainer}} >
        //     {children}
        // </View>
        <TouchableOpacity 
        style={{ ...style, ...styles.button }} 
        onPress={onPress}  
        disabled={disabled}>
            <Text style={{ ...style}} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        fontFamily: 'SpaceMono'
    }
})

export default Buttons