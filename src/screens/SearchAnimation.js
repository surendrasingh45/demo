import React, { useState, useRef, useEffect, createContext, useContext, } from 'react';
import Card from '../components/Card';
import {
    Pressable,
    ScrollView,
    Text,
    View, Easing,
    RefreshControl, Dimensions, Animated, Image, TextInput, SafeAreaView
} from 'react-native';

const SearchAnimation = () => {
    const [state, setState] = useState(false)

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

    const offset = useRef(new Animated.ValueXY({ x: Dimensions.get("window").width, y: 200 })).current
    // const offsetWidth = useRef(new Animated.Value(Dimensions.get("window").width)).current

    const headerHeight = offset.y.interpolate({
        inputRange: [0, 200],
        outputRange: [200, 0],
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItem: 'center', width: '100%', backgroundColor: "white" }}>

            <Animated.View
                style={{
                    width: offset.x,
                    height: headerHeight,
                    backgroundColor: 'white',
                    justifyContent: "center",
                }}
            >
                <View style={{
                    flex: 1, padding: 20, height: 100, flexDirection: 'row',
                    transform: [
                        { skewX: '10deg' }
                    ]
                }}>
                    <TextInput
                        style={{ height: 50, width: '100%', backgroundColor: "rgb(220,220,220)", borderRadius: 20, paddingHorizontal: 20 }}
                        onFocus={() => {
                            Animated.timing(offset.y, {
                                toValue: 100,
                                easing: Easing.bezier[0, 1],
                                duration: 1000,
                                useNativeDriver: false
                            }).start(() => { setState(true) })
                            Animated.timing(offset.x, {
                                toValue: Dimensions.get("window").width - 70,
                                easing: Easing.bezier[0, 1],
                                duration: 1000,
                                useNativeDriver: false
                            }).start(() => { setState(true) })
                        }}
                        onBlur={() => {
                            Animated.timing(offset.y, {
                                toValue: 200, // or whatever value
                                easing: Easing.bezier[0, 1],
                                duration: 1000,
                                useNativeDriver: false

                            }).start(() => { setState(false) })
                            Animated.timing(offset.x, {
                                toValue: Dimensions.get("window").width,
                                easing: Easing.bezier[0, 1],
                                duration: 1000,
                                useNativeDriver: false
                            }).start(() => { setState(false) })
                        }}
                    />
                    {state ? <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, paddingLeft: 10 }}><Text style={{ color: "blue", fontSize: 20 }}>cancel</Text></View> : null}

                </View>

            </Animated.View>
            <ScrollView
                style={{ flex: 1, backgroundColor: 'rgb(100,100,100)' }}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingHorizontal: 20
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset.y } } }],
                    { useNativeDriver: false }
                )}
            >
                {marker.map((marker, index) => (<Card item={marker} />))}
            </ScrollView>
        </SafeAreaView >
    )
}

export default SearchAnimation