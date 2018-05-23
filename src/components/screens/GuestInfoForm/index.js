import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput, FlatList} from 'react-native';
import Image from 'react-native-remote-svg';
import GuestFormRow from './GuestFormRow';
import styles from './styles';

export default class GuestInfoForm extends Component {
    constructor() {
        super();
        // Save guests array for dynamic form generation
        this.state = {
            guests: [
                {
                    key: 0,
                    genderRepresentation: 'Mr',
                    firstName: '',
                    lastName: ''
                },
                {
                    key: 1,
                    genderRepresentation: 'Mrs',
                    firstName: '',
                    lastName: ''
                }
            ]
        };
    }

    // Keys for flatlist
    _keyExtractor = (item, index) => item.key;

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={this.onBackPress} style={styles.backButton}>
                        <Image style={styles.btn_backImage}
                               source={require('../../../../src/assets/svg/arrow-back.svg')}/>
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.steps}>STEP 1 OF 3</Text>
                        <Text style={styles.heading}>Provide Guest Information</Text>
                        <View style={styles.hotelInfoContainer}>
                            <View style={styles.hotelThumbView}>
                                <Image source={require('../../../../src/assets/apartment.png')} style={styles.hotelThumb} />
                            </View>
                            <View style={styles.hotelInfoView}>
                                <Text style={styles.hotelName}>Britannia The International Hotel London, Canary Wharf</Text>
                                <Text style={styles.hotelPlace}>Marsh Wall, London, United Kingdom</Text>
                            </View>
                        </View>
                        <View style={styles.form}>
                            <FlatList
                                style={styles.flatList}
                                data={this.state.guests}
                                keyExtractor={this._keyExtractor}
                                renderItem={({ item, index }) => (
                                    <GuestFormRow guest={item}/>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>

                {/*Bottom Bar*/}
                <View style={styles.floatingBar}>
                    <View style={styles.detailsView}>
                        <View style={styles.pricePeriodWrapper}>
                            <Text style={[styles.price, styles.bold400]}>$500.14</Text>
                            <Text style={styles.period1}> for 1 nights</Text>
                        </View>
                        <View style={styles.pricePeriodWrapper}>
                            <Text style={[styles.price, styles.fontFuturaStd]}>420.61 LOC</Text>
                            <Text style={styles.period2}> for 1 nights</Text>
                        </View>
                    </View>
                    <View style={styles.nextButtonView}>
                        <TouchableOpacity style={styles.nextButton}>
                            <Text style={styles.nextText}>Proceed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
