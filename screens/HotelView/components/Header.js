import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View>
            <Text>Header Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})