import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { gs, colors } from '../../../styles'
import { Entypo } from '@expo/vector-icons'

export default function Extras(){
    const extras = [
        "Payment at Checkout",
        "WI-FI Network is off by 2:00am",
        "No swimming after 11:00pm",
        "No more than 3 bags of luggage",
        "No singing while showering",
        "No Refunds"
    ];

    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go</Text>

            <View style={styles.list}>
                {extras.map((extra, key) => {
                    return <Text style={styles.listItem} key={key}>&mdash; {extra}</Text>
                })}
            </View>

            <View style={{ marginTop: 32, marginBottom: -40}}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{ fontWeight: "700", color: "#fff" }}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
    },
    list: {
        marginTop: 16,
        marginLeft: 8
    },
    listItem: {
        color: colors.textSec,
        marginVertical: 8
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16
    }
})