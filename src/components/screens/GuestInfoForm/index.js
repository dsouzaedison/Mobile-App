import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Image from 'react-native-remote-svg';
import styles from './styles';

export default class GuestInfoForm extends Component {
    constructor() {
        super();
        // Save guests array for dynamic form generation
        this.state = {
            guests: [
                {
                    genderRepresentation: 'Mr',
                    firstName: '',
                    lastName: ''
                },
                {
                    genderRepresentation: 'Mrs',
                    firstName: '',
                    lastName: ''
                }
            ]
        };
    }

    //Generates single row of the form
    guestInfo = (index) => {
        return (
            <View style={styles.guestInfoWrapper} key={index}>
                <Text style={styles.labelGuest}>Guest</Text>
                <View style={styles.inputFieldsView}>
                   <View style={styles.genderFlex}>
                       <View style={[styles.gender, styles.spaceRight]}>
                           <Text style={styles.genderText}>{this.state.guests[index].genderRepresentation}</Text>
                       </View>
                   </View>
                    <View style={styles.firstNameFlex}>
                        <TextInput
                            style={[styles.formField, styles.spaceRight]}
                            onChangeText={(firstName) => {
                                let guests = Object.assign([], this.state.guests);
                                guests[index].firstName = firstName;
                                this.setState({guests});
                            }}
                            value={this.state.text}
                            placeholder="First Name"
                        />
                    </View>
                    <View style={styles.lastNameFlex}>
                        <TextInput
                            style={styles.formField}
                            onChangeText={(lastName) => {
                                let guests = Object.assign([], this.state.guests);
                                guests[index].lastName = lastName;
                                this.setState({guests});
                            }}
                            value={this.state.text}
                            placeholder="Last Name"
                        />
                    </View>
                </View>
            </View>
        )
    }

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
                            {
                                this.state.guests.map((item, index) => this.guestInfo(index))
                            }
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
