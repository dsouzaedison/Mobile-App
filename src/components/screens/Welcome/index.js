import PropTypes from 'prop-types';
import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Image from 'react-native-remote-svg';

import GoBack from '../../atoms/GoBack';
import Button from '../../atoms/Button';

import appLogo from '../../../assets/logo_white.png';
import styles from './styles';
import SplashScreen from 'react-native-smart-splash-screen';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};

SplashScreen.close({
    animationType: SplashScreen.animationType.scale,
    duration: 0,
    delay: 0,
})

const Welcome = ({
    navigation: { navigate }
}) => (
    <View style={styles.container}>
        <GoBack />
        <View style={styles.closeButtonWrapper}>
            <Image
                source={require('../../../assets/close_white.png')}
                style={styles.closeButton} />
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'nowrap'}}>
            <Text style={[styles.appName, styles.appNameLeft]}>L</Text>
            <Image source={appLogo} style={styles.splashImage} />
            <Text style={[styles.appName, styles.appNameRight]}>KTrip</Text>
        </View>
        <Text style={styles.titleText}>Welcome</Text>
        <View style={styles.buttonCollectionWrap}>
            <Button
                onPress={() => navigate('Login')}
                text="Log In"
                wrapStyle={styles.logInButton}
            />
            <TouchableOpacity style={styles.facebookButton}>
                    <Image style={styles.btn_facebookIcon} source={require('../../../../src/assets/icons/facebook-icon.png')} />
                    <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
                </TouchableOpacity>
            {/* <Button
                wrapStyle={styles.facebookButton}
                text="Continue with Facebook"
            /> */}
            <Button
                wrapStyle={styles.createAccountButton}
                onPress={() => navigate('CreateAccount')}
                text="Create an Account"
            />
        </View>
        <Text style={styles.finePrintText}>
            By tapping Log In, Continue or Create Account, I agree to LockChain's Terms of Service,
            Payments Terms of Service and Privacy Policy.
        </Text>
        <View style={styles.lowOpacity}>
            <Image
                source={require('../../../assets/get-started-white-outline.svg')}
                style={styles.getStartedImage}
            />
        </View>
    </View>
);

Welcome.propTypes = propTypes;

export default Welcome;

