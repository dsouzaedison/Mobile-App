import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList, Modal, TextInput} from 'react-native';
import Image from 'react-native-remote-svg';
import styles from './styles';

export default class RoomDetailsReview extends Component {
    constructor() {
        super();
        this.state = {
            links: [
                {
                    key: 0,
                    name: 'Room Type',
                    rhs: 'Standard Room'
                },
                {
                    key: 1,
                    name: 'Dates',
                    rhs: '25 Jan - 26 Jan'
                },
                {
                    key: 2,
                    name: 'Guests',
                    rhs: '2 guests'
                },
                {
                    key: 3,
                    name: 'Cancellation Fees',
                    rhs: 'Show'
                }
            ],
            modalVisible: false,
            walletPassword: ''
        }
    }

    // Control Modal Visibility
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    // Keys for flatlist
    _keyExtractor = (item, index) => item.key;

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalView}>
                        <View style={styles.popup}>
                            <View style={styles.labelCloseView}>
                                <Text style={styles.walletPasswordLabel}>Enter your wallet password</Text>
                                <View  style={styles.closeButtonView}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Image style={styles.closeButtonSvg} source={require('../../../../src/assets/svg/close.svg')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TextInput
                                style={styles.walletPasswordInput}
                                onChangeText={(walletPassword) => this.setState({walletPassword})}
                                value={this.state.walletPassword}
                                placeholder="Wallet password"
                            />
                            <TouchableOpacity style={styles.confirmButton}>
                                <Text style={styles.confirmButtonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <ScrollView>
                    {/*Back Button*/}
                    <TouchableOpacity onPress={this.onBackPress} style={styles.backButton}>
                        <Image style={styles.btn_backImage}
                               source={require('../../../../src/assets/svg/arrow-back.svg')}/>
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.steps}>STEP 2 OF 3</Text>
                        <Text style={styles.heading}>Review Room Details</Text>
                        <View style={styles.hotelInfoContainer}>
                            <View style={styles.hotelThumbView}>
                                <Image source={require('../../../../src/assets/apartment.png')} style={styles.hotelThumb} />
                            </View>
                            <View style={styles.hotelInfoView}>
                                <Text style={styles.hotelName}>Britannia The International Hotel London, Canary Wharf</Text>
                                <Text style={styles.hotelPlace}>Marsh Wall, London, United Kingdom</Text>
                            </View>
                        </View>
                    </View>
                    {/*Button list displayed using flat list*/}
                    <FlatList
                        style={styles.flatList}
                        data={this.state.links}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <View style={styles.listItemNameWrapper}>
                                    <Text style={styles.listItemText}>{item.name}</Text>
                                </View>
                                <View style={styles.listItemRhsWrapper}>
                                   <Text style={styles.rhs}>{item.rhs}</Text>
                                </View>
                            </View>
                        )}
                    />
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
                    <View style={styles.payButtonView}>
                        <TouchableOpacity style={styles.payButton}  onPress={() => {
                            this.setModalVisible(true);
                        }}>
                            <Text style={styles.confirmPayText}>Confirm and Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
