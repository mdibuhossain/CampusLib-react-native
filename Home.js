import React from 'react'
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Home() {
    return (
        <ScrollView>
            <Home_header />
            <Categories />
            <View vertical showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 10 }}>
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                    <DisplayBooks />
                </View>
            </View >
        </ScrollView>
    )
}

const DisplayBooks = () => (
    <TouchableOpacity activeOpacity={0.6}>
        <View style={{ flexDirection: 'row', width: "100%", height: 60, borderRadius: 8, backgroundColor: '#fff', marginVertical: 5, padding: 8, alignItems: 'flex-start' }}>
            <Image
                style={{ borderRadius: 5, marginRight: 10 }}
                source={{
                    width: 40,
                    height: '100%',
                    uri: 'https://i.picsum.photos/id/924/200/300.jpg?hmac=9Zu3ewQYhI2ltbuwGQk-Ed6PjR87O-zdiPty45pJS6g'
                }}
            />
            <View style={{ width: '85%' }}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontWeight: 'bold', color: '#4d4d4d' }}>
                    Head First Object-Oriented Analysis and Design
                </Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontWeight: '100', color: '#969696' }}>
                    Brett D. McLaughlin, Gary Pollice, Dave West
                </Text>
            </View>
        </View>
    </TouchableOpacity>
)

const Home_header = () => (
    <View style={{ alignItems: 'center', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 10, paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 21, marginBottom: 5 }}>CAMPUSLIB</Text>
        <TextInput
            style={{ height: 40, borderColor: '#eee', backgroundColor: '#eee', borderWidth: 1, borderRadius: 100, paddingHorizontal: 15, width: '100%' }}
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