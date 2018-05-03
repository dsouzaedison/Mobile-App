import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';

import styles from './styles';

const defaulProps = {
    text: '',
    onPress: () => {},
    wrapStyle: {},
    textStyle: {}
};

const Button = ({
    text,
    onPress,
    wrapStyle,
    textStyle
}) => (
    <View style={[styles.buttonWrap, wrapStyle]}>
        <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    </View>
);

Button.defaulProps = defaulProps;

export default Button;