import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gs, colors } from '../../../styles'

const hotel = {
    name: "Mt. Catlin Hotel",
    price: "$967",
    location: "Santa Catarina",
    about: "A romantic exclusive getaway, with luxury and service excellence in the unspoiled nature and sea of the Emerald Coast in the province of Santa Catarina."
}

export default function About(){
    return (
        <View style={StyleSheet.container}>
            <Text style={gs.title}>{hotel.name}</Text>

            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>

            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    }
})