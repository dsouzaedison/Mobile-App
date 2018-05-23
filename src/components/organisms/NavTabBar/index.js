import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Image from 'react-native-remote-svg';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import PropTypes from 'prop-types';
import styles from './styles';


export default class NavTabBar extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            state: PropTypes.shape({
                index: PropTypes.number,
                routes: PropTypes.arrayOf(PropTypes.shape({
                    key: PropTypes.string
                }))
            })
        }),
        paymentInfo: PropTypes.shape({
            currency: PropTypes.string
        }),
        loadInitialData: PropTypes.func
    }

    static defaultProps = {
        paymentInfo: {
            currency: 'USD',
            currencySign: '$',
            locRate: null
        },
        navigation: {
            navigate: () => {},
            state: {
                index: 1,
                routes: []
            }
        },
        loadInitialData: () => {}
    }

    componentDidMount() {
        const { currency } = this.props.paymentInfo;
        this.props.loadInitialData({ currency });
    }

    render() {
        const { navigate, state } = this.props.navigation;
        const { index, routes } = state;
        const active = routes[index].key;

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => navigate('PROFILE')}>
                    <View style={styles.tab}>
                        {/* <Text style={active === 'PROFILE' ? styles.activeIconStyle : styles.inactiveIconStyle}>
                            <FontAwesome>{Icons.userO}</FontAwesome>
                        </Text> */}

                        <Image style={{height: 25, width: 25}}
                        source={active === 'PROFILE' ? require('../../../assets/svg/NavBar/active/profile-active.svg')
                        : require('../../../assets/svg/NavBar/profile.svg')} />
                        <Text style={active === 'PROFILE' ? styles.activeTextStyle : styles.inactiveTextStyle}>
              PROFILE
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('MESSAGES')}>
                    <View style={styles.tab}>
                    <Image style={{height: 25, width: 25}}
                        source={active === 'MESSAGES' ? require('../../../assets/svg/NavBar/active/message-active.svg')
                        : require('../../../assets/svg/NavBar/messages.svg')} />
                        {/* <Text style={active === 'MESSAGES' ? styles.activeIconStyle : styles.inactiveIconStyle}>
                            <FontAwesome>{Icons.commentingO}</FontAwesome>
                        </Text> */}
                        <Text style={active === 'MESSAGES' ? styles.activeTextStyle : styles.inactiveTextStyle}>
              MESSAGES
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('MY_TRIPS')}>
                    <View style={styles.tab}>
                    <Image style={{height: 30, width: 30}}
                        source={active === 'MY_TRIPS' ? require('../../../assets/svg/NavBar/active/trips-active.svg')
                        : require('../../../assets/svg/NavBar/trip.svg')} />
                        {/* <Text style={active === 'MY_TRIPS' ? styles.activeIconStyle : styles.inactiveIconStyle}>
                            <FontAwesome>{Icons.suitcase}</FontAwesome>
                        </Text> */}
                        <Text style={active === 'MY_TRIPS' ? styles.activeTextStyle : styles.inactiveTextStyle}>
              MY TRIPS
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('FAVORITES')}>
                    <View style={styles.tab}>
                    <Image style={{height: 25, width: 25}}
                        source={active === 'FAVORITES' ? require('../../../assets/svg/NavBar/active/favorite-active.svg')
                        : require('../../../assets/svg/NavBar/favorites.svg')} />
                        {/* <Text style={active === 'FAVORITES' ? styles.activeIconStyle : styles.inactiveIconStyle}>
                            <FontAwesome>{Icons.heartO}</FontAwesome>
                        </Text> */}
                        <Text style={active === 'FAVORITES' ? styles.activeTextStyle : styles.inactiveTextStyle}>
            FAVORITES
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('EXPLORE')}>
                    <View style={styles.tab}>
                    <Image style={{height: 25, width: 25}}
                        source={active === 'EXPLORE' ? require('../../../assets/svg/NavBar/active/explore-active.svg')
                        : require('../../../assets/svg/NavBar/explore.svg')} />
                        {/* <Text style={active === 'EXPLORE' ? styles.activeIconStyle : styles.inactiveIconStyle}>
                            <FontAwesome>{Icons.search}</FontAwesome>
                        </Text> */}
                        <Text style={active === 'EXPLORE' ? styles.activeTextStyle : styles.inactiveTextStyle}>
              EXPLORE
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

