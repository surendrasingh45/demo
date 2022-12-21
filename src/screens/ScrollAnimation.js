import React, { useState, useRef, useEffect, createContext, useContext, } from 'react';
import Card from '../components/Card';
import {
    Pressable,
    ScrollView,
    Text,
    View,
    RefreshControl, Dimensions, Animated, Image
} from 'react-native';

const Header = ({ animatedValue }) => {

    const headerHeight = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [400, 200],
        extrapolate: 'clamp'
    });


    return (
        <Animated.View
            style={{
                // position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                // zIndex: 10,
                height: headerHeight,
                backgroundColor: 'lightblue',
                justifyContent: "center",
                // alignItems: 'center'
            }}

        >
            <View style={{}}>
                <Image
                    source={require('../assets/userProfile.png')}
                    style={{ height: 200, width: "100%" }}
                    resizeMode="contain"
                /></View>
        </Animated.View>
    )
}

const ScrollAnimation = () => {

    const marker = [
        {
            coordinate: {
                latitude: 28,
                longitude: 77,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
        },
        {
            coordinate: {
                latitude: 20,
                longitude: 73,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
        },
        {
            coordinate: {
                latitude: 26,
                longitude: 75,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
        },
        {
            coordinate: {
                latitude: 12,
                longitude: 77,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
        },
        {
            coordinate: {
                latitude: 12,
                longitude: 77,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
        },
        {
            coordinate: {
                latitude: 12,
                longitude: 77,
                latitudeDelta: 1,
                longitudeDelta: 1,
            }
        },
    ]

    const offset = useRef(new Animated.Value(0)).current

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItem: 'center', width: '100%' }}>
            <Header animatedValue={offset} />
            <ScrollView
                style={{ flex: 1, backgroundColor: 'blue' }}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingHorizontal: 20
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
            >
                {marker.map((marker, index) => (<Card item={marker} />))}
            </ScrollView>
        </View >
    )
}

export default ScrollAnimation