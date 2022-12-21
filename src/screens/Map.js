/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Dimensions,
  Pressable
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'
import Card from '../components/Card';
const Map = () => {

  const panalRef = React.createRef();
  const [state, setState] = useState({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 1,
      longitudeDelta: 1,
    },
    index: 0,
    markers: [
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

    ]
  })

  const onRegionChange = (coordinate) => {
    console.log(panalRef.current, "console.log")
    panalRef.current.animateToRegion(coordinate, 2000);
  }

  return (

    <View style={{ flex: 1, }}>
      <MapView
        // region={state.region}
        // onRegionChange={onRegionChange}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 32,
          longitude: 38,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        ref={panalRef}
        style={{ flex: 1 }}
      >
        {state.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>

      <View style={{
        width: "100%",
        position: 'absolute',
        bottom: 10,
      }}>
        <FlatList
          data={state.markers}
          renderItem={({ item }) => <Card onRegionChange={onRegionChange} item={item} />}
          keyExtractor={(item, index) => index.toString()}
          scrollEventThrottle={1}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width * 0.8 + 20}
          pagingEnabled
          onMomentumScrollEnd={(event) => {
            const ind = Math.ceil(
              event.nativeEvent.contentOffset.x /
              Dimensions.get("window").width
            );
            onRegionChange(state.markers[ind].coordinate)
          }}
        />
      </View>

    </View>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Map;
