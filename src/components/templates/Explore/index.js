import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { getTopHomes } from '../../../utils/requester';
import DateAndGuestPicker from '../../organisms/DateAndGuestPicker';
import SearchBar from '../../molecules/SearchBar';
import SmallPropertyTile from '../../molecules/SmallPropertyTile';
import { withNavigation } from 'react-navigation';

import SplashScreen from 'react-native-smart-splash-screen';
import Image from 'react-native-remote-svg';
import styles from './styles';

class Explore extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        })
    }

    static defaultProps = {
        navigation: {
            navigate: () => {}
        }
    }

    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.updateData = this.updateData.bind(this);
        this.gotoGuests = this.gotoGuests.bind(this);
        this.gotoSearch = this.gotoSearch.bind(this);
        this.state = {
            search: '',
            checkInDate: 'Thu, 25 Jan',
            checkOutDate: 'Sat, 27 Jan',
            guests: 0,
            adults: 0,
            children: 0,
            infants: 0,
            topHomes: []
        };
    }

    componentWillMount(){
        //Remove Splash
        console.disableYellowBox = true;
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 0,
            delay: 0,
        })
    }

    componentDidMount() {
        getTopHomes().then((topHomes) => {
            const truncated = topHomes.content.slice(0, 4);
            this.setState({ topHomes: truncated });
        });
    }

    onChangeHandler(property) {
        return (value) => {
            this.setState({ [property]: value });
        };
    }

    renderHomes() {
        return (
            <View style={styles.sectionView}>
                <View style={styles.subtitleView}>
                    <Text style={styles.subtitleText}>Popular Homes</Text>
                </View>

                <View style={styles.tilesView}>
                    { this.state.topHomes.map(listing => <SmallPropertyTile listingsType="homes" listing={listing} key={listing.id} />) }
                </View>
            </View>
        );
    }

    updateData(data) {
      console.log(data);
      this.setState({ adults: data.adults, children: data.children, infants: data.infants});
    }

    gotoGuests() {
      this.props.navigation.navigate('GuestsScreen', {adults: this.state.adults, children: this.state.children, infants: this.state.infants, updateData:this.updateData});
    }

    gotoSearch() {
      this.props.navigation.navigate('PropertyScreen');
    }


    // TODO: a renderHotels method does not exist yet because backend does not yet have an endpoint to request popular hotels

    render() {
        const {
            adults, children, infants, search, checkInDate, checkOutDate, guests, topHomes, onDatesSelect
        } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.searchAreaView}>
                    <SearchBar
                        autoCorrect={false}
                        value={search}
                        onChangeText={this.onChangeHandler('search')}
                        placeholder="Discover your next experience"
                        placeholderTextColor="#767678"
                        leftIcon="search"
                    />
                </View>

                <View style={styles.section1}>
                    <View style={styles.dateView}>
                    <TouchableOpacity style={styles.btnCheckInDate}><Text style={styles.btn_text}>Check In</Text><Text style={styles.btn_subtext}>SelectDate</Text></TouchableOpacity>
                    <View style={styles.betweenButtons}></View>
                    <TouchableOpacity style={styles.btnCheckOutDate}><Text style={styles.btn_text}>Check Out</Text><Text style={styles.btn_subtext}>-----</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.btnGuests}><Text style={styles.btn_text}>Guests</Text><Text style={styles.btn_subtext}>------</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnSettings}><Image style={styles.btn_SettingImages} source={require('../../../../src/assets/svg/filters.svg')} /></TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnSearch}><Text style={styles.searchText}>Search</Text></TouchableOpacity>
                {/*<ScrollView showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>*/}
                    {/*<DateAndGuestPicker*/}
                        {/*checkInDate={checkInDate}*/}
                        {/*checkOutDate={checkOutDate}*/}
                        {/*adults={adults}*/}
                        {/*children={children}*/}
                        {/*infants={infants}*/}
                        {/*gotoGuests={this.gotoGuests}*/}
                        {/*gotoSearch={this.gotoSearch}*/}
                        {/*onDatesSelect={onDatesSelect}*/}
                    {/*/>*/}
                    {/*{ topHomes ? this.renderHomes() : null }*/}
                {/*</ScrollView>*/}
            </View>
        );
    }
}

export default withNavigation(Explore);
