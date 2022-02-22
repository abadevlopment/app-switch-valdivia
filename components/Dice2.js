import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors'


const Dice2 = ({style, rolledValue }) => {
    return (
        <View style={{ ...style, ...styles.dice}}>
            <Text style={{ ...style, ...styles.diceText}} >{rolledValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dice: {
        borderWidth: 1,
        width: 80,
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    diceText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.accent,
        fontFamily: 'SpaceMonoBold',

    },
})

export default Dice2