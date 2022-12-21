import React from "react";
import { View, Text, Pressable } from "react-native";

const Card = (props) => {
    return (
        <View style={{
            backgroundColor: 'rgb(200,200,200)', height: 200,
            margin: 10, width: 325, justifyContent: "space-around", alignItems: "center"
            , transform: [
                { rotateX: "1deg" },
                { rotateZ: "1deg" }
            ]
        }}>
            <Text >{props.item.coordinate.latitude}</Text>
            <Text>{props.item.coordinate.longitude}</Text>
            <Text>image</Text>
        </View>

    )
}
export default Card
