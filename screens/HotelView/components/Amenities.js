import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gs, colors } from '../../../styles'
import { Feather, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons'

export default function Amenities(){
    return (
        <View style={gs.sectionContainer}>
            <Text style={gs.sectionTitle}>Amenities</Text>
            <View style={styles.amenitiesContainer}>
                {/* wifi */}
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Feather name="wifi" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>WI-FI</Text>
                </View>
                {/* restaurants */}
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Hotel Restaurant</Text>
                </View>
                {/* Swimming Pool */}
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <FontAwesome5 name="swimmer" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Swimming Pools</Text>
                </View>
                {/* Bar */}
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Entypo name="drink" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Bar</Text>
                </View>
                {/* Parking */}
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Ionicons name="ios-car" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Parking Spot</Text>
                </View>
                {/* NightClub */}
                <View style={styles.amenityContainer}>
                    <View style={styles.amenity}>
                        <Feather name="speaker" size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.amenityName}>Night Club</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    amenitiesContainer: {
        marginTop: 16,
        marginHorizontal: 16,
        ...gs.rowBetween,
        flexWrap: "wrap"
    },
    amenityContainer: {
        alignItems: "center",
        width: 95,
        marginVertical: 12
    },
    amenity: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        ...gs.center,
        backgroundColor: "#444"
    },
    amenityName: {
        color: colors.lightHl,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: "center"
    }
})