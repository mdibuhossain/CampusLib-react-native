import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'

export default function About() {
    return (
        <>
            <View style={styles.aboutContainer}>
                <Text style={{ color: '#2e2d2d' }}>Visit our website:</Text>
                <Text style={{ color: '#1971ff', fontWeight: 'bold', marginHorizontal: 5 }}
                    onPress={() => Linking.openURL('https://sites.google.com/view/campuslib')}>
                    CampusLib
                </Text>
            </View >
            <View style={{ alignItems: 'center', marginVertical: 5 }}>
                <Text style={{ color: '#2e2d2d' }}> Developed by Ibrahim Hossain</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
