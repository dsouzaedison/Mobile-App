import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import PropTypes from 'prop-types';
import { validatePassword, validateConfirmPassword } from '../../../utils/validation';
import GoBack from '../../atoms/GoBack';
import SmartInput from '../../atoms/SmartInput';
import styles from './styles';

// TODO: keep styles in saparate file



class CreatePassword extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            state: PropTypes.shape({
                params: PropTypes.object //eslint-disable-line
            })
        })
    }

    static defaultProps = {
        navigation: {
            navigate: () => {},
            state: {
                params: {}
            }
        }
    }
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            password: '',
            confirmPassword: ''
        };
    }

    onChangeHandler(property) {
        return (value) => {
            this.setState({ [property]: value });
        };
    }

    render() {
        const { password, confirmPassword } = this.state;
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <View style={styles.chatToolbar}>
                
                <TouchableOpacity onPress={this.onBackPress}>
                    <Image style={styles.btn_backImage} source={require('../../../../src/assets/icons/icon-back-white.png')} />
                </TouchableOpacity>

            </View>

                <View style={styles.main}>
                    <View style={styles.titleView}><Text style={styles.titleText}>Create Password</Text></View>

                    <Text style={styles.finePrintText}>
                    Your password must be 8 or more characters long. Do not use any common passwords, repetition or sequences.
                    Try making it longer or adding symbols, like !, # or %.
                    </Text>

                    <View style={styles.inputView}>
                        <SmartInput
                            secureTextEntry
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={this.onChangeHandler('password')}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            rightIcon={validatePassword(password) ? 'check' : null}
                        />
                    </View>

                    <View style={styles.subTitleView}><Text style={styles.titleText}>Please Confirm Your Password</Text></View>

                    <View style={styles.inputView}>
                        <SmartInput
                            secureTextEntry
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={confirmPassword}
                            onChangeText={this.onChangeHandler('confirmPassword')}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            rightIcon={validateConfirmPassword(password, confirmPassword) ? 'check' : null}
                        />
                    </View>

                    <View style={styles.nextButtonView}>
                        <TouchableOpacity
                            disabled={!validatePassword(password) || !validateConfirmPassword(password, confirmPassword)}
                            onPress={() => navigate('Terms', { ...params, password })}
                        >
                            <View style={styles.nextButton}>
                                <Text style={styles.buttonText}>
                                    <FontAwesome>{Icons.arrowRight}</FontAwesome>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.lowOpacity}>
                    <Image
                        source={require('../../../assets/get-started-white-outline.svg')}
                        style={styles.getStartedImage}
                    />
                </View>
            </View>
        );
    }
    onBackPress = () => {
        this.props.navigation.navigate('CreateAccount');
    }
}

export default CreatePassword;
