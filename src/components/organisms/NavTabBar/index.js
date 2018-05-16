import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
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

                        <Image style={{width: '50%',height: '40%',alignItems: 'center',position: 'relative',margin: 0,}} 
                        source={active === 'PROFILE' ? require('../../../assets/tab-icon/profile-icon-colored.png') 
                        : require('../../../assets/tab-icon/profile-icon.png')} />
                        <Text style={active === 'PROFILE' ? styles.activeTextStyle : styles.inactiveTextStyle}>
              PROFILE
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('MESSAGES')}>
                    <View style={styles.tab}>
                    <Image style={{width: '60%',height: '40%',alignItems: 'center',position: 'relative',margin: 0,}} 
                        source={active === 'MESSAGES' ? require('../../../assets/tab-icon/message-icon-colored.png') 
                        : require('../../../assets/tab-icon/message-icon.png')} />
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
                    <Image style={{width: '90%',height: '40%',alignItems: 'center',position: 'relative',margin: 0,}} 
                        source={active === 'MY_TRIPS' ? require('../../../assets/tab-icon/trip-icon-colored.png') 
                        : require('../../../assets/tab-icon/trip-icon.png')} />
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
                    <Image style={{width: '60%',height: '40%',alignItems: 'center',position: 'relative',margin: 0,}} 
                        source={active === 'FAVORITES' ? require('../../../assets/tab-icon/ratng-transparent-star-colored.png') 
                        : require('../../../assets/tab-icon/ratng-transparent-star.png')} />
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
                    <Image style={{width: '70%',height: '40%',alignItems: 'center',position: 'relative',margin: 0,}} 
                        source={active === 'EXPLORE' ? require('../../../assets/tab-icon/search-icon-colored.png') 
                        : require('../../../assets/tab-icon/search-icon.png')} />
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

