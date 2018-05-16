import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';


class MyTrips extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholderImageView}>
                    <Image
                        style={styles.placeholderImage}
                        source={require('../../../assets/placeholder_mytrips.png')}
                    />
                </View>
                <Text style={styles.title}>You have no upcoming trips</Text>
                <Text style={styles.subtext}>Discover your next experience</Text>
                <TouchableOpacity style={styles.buttonExplore}>
                    <Text style={styles.exploreBtnText}>Start Exploring</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default MyTrips;
