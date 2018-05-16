import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Image from 'react-native-remote-svg';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            cardNumber: 'c1aba770da035e4de24b86e6342314f3',
            balance: '0,035,974.23 LOC / $250',
            links: [
                {
                    key: 0,
                    name: 'View Profile',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'null'
                },
                {
                    key: 1,
                    name: 'Edit Profile',
                    route: require('../../../assets/svg/edit-profile.svg'),
                    icon: 'user'
                },
                {
                    key: 2,
                    name: 'Notifications',
                    route: require('../../../assets/svg/notifications.svg'),
                    icon: 'bell'
                },
                {
                    key: 3,
                    name: 'Payment Methods',
                    route: require('../../../assets/svg/payment.svg'),
                    icon: 'wallet'
                },
                {
                    key: 4,
                    name: 'Currency',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'null'
                },
                {
                    key: 5,
                    name: 'Switch to Hosting',
                    route: require('../../../assets/svg/switch.svg'),
                    icon: 'refresh'
                },
                {
                    key: 6,
                    name: 'Log Out',
                    route: require('../../../assets/icons/switch.png'),
                    icon: 'null'
                }
            ]
        }
    }

    componentDidMount() {

    }

    _keyExtractor = (item, index) => item.key;

    getIconJSX = (icon) => {
        if(icon) {
            if(icon === 'usd') {
                console.log('sanan')
                return <Text style={styles.usd}>USD</Text>
            }
            return console.log('sanan')
            // return <Image source={require('../../../../src/assets/icons/notifications.png')} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onBackPress} style={styles.backButton}>
                    <Image style={styles.btn_backImage} source={require('../../../../src/assets/svg/arrow-back.svg')} />
                </TouchableOpacity>
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <View style={styles.transparentLogoWrapper}>
                                <Image
                                    style={styles.logoTransparent}
                                    source={require('../../../assets/logo_white.png')}
                                />
                            </View>
                            <View style={styles.cardFAB}>
                                <Text style={styles.FAB}>+</Text>
                            </View>
                            <View style={styles.cardContentsWrapper}>
                                <View style={styles.cardRowOne}>
                                    <Image
                                        style={styles.cardLogo}
                                        source={require('../../../assets/logo_white.png')}
                                    />
                                </View>
                                <View style={styles.cardRowTwo}>
                                    <Text style={styles.cardNumber}>{this.state.cardNumber}</Text>
                                </View>
                                <View style={styles.cardRowThree}>
                                    <Text style={styles.cardPropertyName}>Current Balance</Text>
                                    <Text style={styles.cardBalance}>{this.state.balance}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.copyAddress}>
                            <Text style={styles.copyAddressText}>Copy your wallet address to clipboard</Text>
                        </View>
                    </View>
                    <FlatList
                        data={this.state.links}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.listItem}>
                                    <View style={styles.listItemNameWrapper}>
                                        <Text style={styles.listItemText}>{item.name}</Text>
                                    </View>
                                    <View style={styles.listItemIconWrapper}>
                                    <Image
                                        style={item.icon !== 'null' && styles.menuIcons}

                                        source={item.icon !== 'null' && item.route}
                                    />
                                    <Text style={styles.currencyText}>{item.icon === 'null' & item.name === 'Currency'? 'USD' : ''}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </ScrollView>
            </View>
        )
    }

    onBackPress = () => {
        this.props.navigation.navigate('EXPLORE');
    }
}

export default Profile;
