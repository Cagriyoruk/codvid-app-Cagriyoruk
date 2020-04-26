import React, { Component } from  'react';
import { StyleSheet } from  'react-native';
import MapView from  'react-native-maps';

export default class App extends Component {
    render() {
        return <MapView style = {styles.map}
            initialRegion = {{
                latitude:  42.361145,
                longitude:  -71.057083,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}/>;
    }
}

const styles = StyleSheet.create({
    map: {
        height: 100,
        flex: 1
        }
});