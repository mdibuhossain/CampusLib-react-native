import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Home() {
    return (
        <View>
            <Home_header />
            <Categories />
        </View>
    )
}


const Home_header = () => (
    <View style={{ alignItems: 'center', backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10, paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 21, marginBottom: 5 }}>CAMPUSLIB</Text>
        <TextInput
            style={{ height: 40, borderColor: '#eee', borderWidth: 1, borderRadius: 100, paddingHorizontal: 15, width: '100%' }}
            placeholder="Search"
        />
    </View>
)

const Categories = () => (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginVertical: 5, height: 60, alignItems: 'center', paddingHorizontal: 15 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginRight: 5 }} >
                <Button title='CSE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='EEE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='MAT' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
            <View style={{ marginRight: 5 }} >
                <Button title='BGE' />
            </View>
        </ScrollView>
    </View>
)