import React from 'react'
import { View, StyleSheet } from 'react-native'


const Card = ({ children, style }) => {
    return (
        // <View style={[ cardStyle, styles.cardContainer]} >
        <View style={{...style, ...styles.cardContainer}} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
})

export default Card