import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

export default class GuestFormRow extends Component {
    constructor() {
        super();
        this.state = {
            guest: {
                genderRepresentation: '',
                firstName: '',
                lastName: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            guest: this.props.guest
        });
    }

    render() {
        return (
            <View style={styles.guestInfoWrapper} key={this.props.guest.key}>
                <Text style={styles.labelGuest}>Guest</Text>
                <View style={styles.inputFieldsView}>
                    <View style={styles.genderFlex}>
                        <View style={[styles.gender, styles.spaceRight]}>
                            <Text style={styles.genderText}>{this.state.guest.genderRepresentation}</Text>
                        </View>
                    </View>
                    <View style={styles.firstNameFlex}>
                        <TextInput
                            style={[styles.formField, styles.spaceRight]}
                            onChangeText={(firstName) => {
                                let guest = Object.assign([], this.state.guest);
                                guest.firstName = firstName;
                                this.setState({guest});
                            }}
                            value={this.state.guest.firstName}
                            placeholder="First Name"
                        />
                    </View>
                    <View style={styles.lastNameFlex}>
                        <TextInput
                            style={styles.formField}
                            onChangeText={(lastName) => {
                                let guest = Object.assign([], this.state.guest);
                                guest.lastName = lastName;
                                this.setState({guest});
                            }}
                            value={this.state.guest.lastName}
                            placeholder="Last Name"
                        />
                    </View>
                </View>
            </View>
        )
    }
}
