import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Buttons from '../components/Button'
import Dice1 from '../components/Dice1'
import Dice2 from '../components/Dice2'
import Colors from '../constants/Colors'
import GameA from './GameA'
import GameB from './GameB'

const StartGameScreen = () => {
    const [rolledValueA, setRolledValueA] = useState(0);
    const [rolledValueB, setRolledValueB] = useState(0);
    const [rolledValueC, setRolledValueC] = useState(0);
    const [rolledValueD, setRolledValueD] = useState(0);
    const [disabled, setDisabled] = useState(false)
    const [disabled1, setDisabled1] = useState(false)
    const [view, setView] = useState(true)
    const [viewRes, setViewRes] = useState(false)
    const [winner, setWinner] = useState('')

    const rollA = () => {
        setRolledValueA(Math.round(Math.random() * 5 + 1))
        setRolledValueB(Math.round(Math.random() * 5 + 1))
        setDisabled(true)
    }

    const rollB = () => {
        setRolledValueC(Math.round(Math.random() * 5 + 1))
        setRolledValueD(Math.round(Math.random() * 5 + 1))
        setDisabled1(true)
    }

    const handleView = () => {
        setView(false)
    }

    const handleResult = () => {
        const gameA = rolledValueA + rolledValueB
        const gameB = rolledValueC + rolledValueD

        if (gameA > gameB) {
            setWinner('GANADOR JUGADOR A !!!')
        } else if (gameB > gameA) {
            setWinner('GANADOR JUGADOR B !!!')
        } else {
            setWinner('EMPATE!!!')
        }
        setViewRes(true);
    }

    return (
        <>
            {viewRes ?
                <Card style={styles.gameContainer} >
                    <Text style={styles.title2} >{winner}</Text>
                </Card>
                :
                <>
                    {view ?
                        <GameA
                            rolledValueA={rolledValueA}
                            rolledValueB={rolledValueB}
                            onPressA={rollA}
                            onPressB={handleView}
                            disabled={disabled}
                        />
                        :
                        <GameB
                            rolledValueC={rolledValueC}
                            rolledValueD={rolledValueD}
                            onPressA={rollB}
                            onPressB={handleResult}
                            disabled={disabled1}
                        />
                    }
                </>
            }
        </>
    )
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
    title2: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        color: Colors.accent
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

export default StartGameScreen