import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import Card from '../components/Card'
import Buttons from '../components/Button'
import Dice1 from '../components/Dice1'
import Dice2 from '../components/Dice2'

const GameB = ( {rolledValueC, rolledValueD, onPressA, onPressB, disabled}  ) => {
    return (
        <View style={styles.screen} >
            <Card style={styles.gameContainer} >
                <Text style={styles.title} >Jugador B</Text>
                <View style={styles.diceContainer} >
                    <Dice1 rolledValue={rolledValueC} />
                    <Dice2 rolledValue={rolledValueD} />
                </View>
                <View style={styles.buttonContainer} >
                    <Buttons style={styles.buttonGame} title='Lanzar' onPress={onPressA} disabled={disabled} ></Buttons>
                </View>
            </Card>
            <Card style={styles.gameContainer} >
                <View style={styles.buttonContainer} >
                    <Buttons style={styles.buttonGame2} title='Resultado' onPress={onPressB} disabled={!disabled} ></Buttons>
                </View>
            </Card>
        </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    gameContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 5,
    },
    diceContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        padding: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },
    buttonGame: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: Colors.primary,
        borderColor: Colors.accent,
    },
    buttonGame2: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: Colors.accent,
        borderColor: Colors.primary,
    },
})


export default GameB