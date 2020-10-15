import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { gs, colors } from '../../styles'
import Header from './components/Header'

export default class index extends Component {
    render(){
        return (
            <ScrollView style={StyleSheet.container}>
                <Text>Profile view</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBg,

    }
})