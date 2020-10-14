import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Bookmark(){
    return (
        <View style={StyleSheet.container}>
            <Text>BookMark</Text>
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