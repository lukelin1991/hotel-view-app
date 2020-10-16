import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gs, colors } from '../../../styles'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default class Header extends Component {
    render(){
        return (
            <LinearGradient colors={[colors.orange, colors.pink]} start={[0, 0]} end={[1, 1]}>
                <View style={{ marginHorizontal: 32, paddingVertical: 64 }}>
                    <View style={gs.rowBetween}>
                        <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                        <Entypo name="dots-three-vertical" color={colors.text} size={24} />
                    </View>

                    <View style={styles.imageContainer}>
                        <View>
                            <View style={styles.check}>
                                <Ionicons name="md-checkmark" size={20} color={colors.pink} />
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})