import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView  } from 'react-native';
import Image from 'react-native-remote-svg';
import FontAwesome, { Icons } from 'react-native-fontawesome';
//import Image from 'react-native-remote-svg';
//import GoBack from '../common/GoBack';
import { ListView  } from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';
import { getMyConversations, approveMessage, declineMessage } from '../../../utils/requester';
import styles from './inboxStyle';

const inbox = [
        {user: "Jesse", status: "Confirmed", time: "10:05 am", date: "Thu 25 Jan - Sat 27 Jan", venue: "Garden Laft Apartment", message: "Hi Jaime! I am going to be arriving in Florence on Thursday arround noon. Looking forward to meeting you! Jesse"},
        {user: "Taylor", status: "Discussion", time: "8:15 am", date: "Sat 3 Feb - Web 7 Feb", venue: "Crazy Bright Studio Apartment", message: "Hi Jaime! I am going to be arriving in Florence on Thursday arround noon. Looking forward to meeting you! Jesse"},
        {user: "Jeniffer", status: "Review", time: "Yesterday", date: "13 days left to review", venue: "Lovely City Center Apartment"}
    ]

class Inbox extends Component {
    //navigation props
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

    //TODO: We have to change type of list view to flat list
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: inbox,
        };
    }

    //Getting conversations
    getMyConversations = () => {
        getMyConversations()
            .then(res => {
                if(res) {
                    this.setState({
                        dataSource: res
                    });
                }
            })
            .catch(e => console.log(e));
    }

    //approving message
    approveMessage = (id) => {
        approveMessage(id)
            .then(res => {
                //Show success message
            })
            .catch(e => console.log(e));
    }

    //declining message
    declineMessage = (id) => {
        declineMessage(id)
            .then(res => {
                if(res) {
                    //Show success message
                }
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        // this.getMyConversations();

        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.InboxView}>{/*Main container*/}

                <View style={styles.chatToolbar}>{/*Toolbar container*/}
                    <TouchableOpacity onPress={this.onBackPress} style={{marginTop: 45, marginLeft: 15, marginBottom: 20}}>
                        <Image style={styles.btn_backImage} source={require('../../../../src/assets/svg/arrow-back.svg')} />
                    </TouchableOpacity>
                </View>{/*End of Toolbar container*/}

                <ScrollView>{/*Scroll View container*/}{/*To be changed to flat list*/}

                    <View style={styles.mainMenu}>
                        <Text style={styles.heading}>Inbox</Text>
                        <Text style={styles.subHeading}>You have 3 unread messages</Text>
                    </View>

                        <View style={styles.container}>
                            {
                                this.state.dataSource.map((item, index) => {
                                    if(item.status !== "Review"){
                                        return (
                                            <TouchableOpacity style={[styles.tr]} key={index} onPress={()=> navigate('Chat')}>
                                                <View style={styles.trTopView}>
                                                    <View style={styles.trImgView}>
                                                        <Image source={require('../../../assets/icons/receiverImage.png')} style={[styles.trAvatar]} resizeMode={"cover"}/>
                                                    </View>
                                                    <View style={[styles.messageBox]}>
                                                        <View style={[styles.userView]}>
                                                            <View style={[styles.leftView]}>
                                                                <Text style={[styles.messageTitle, item.status == "Confirmed" ? styles.discussion : styles.review]}>{item.user} - {item.status}</Text>
                                                            </View>
                                                            <View style={[styles.rightView]}>
                                                                <Text style={[styles.messageTimeTitle]}>10:05 am</Text>
                                                            </View>
                                                            <View style={[styles.lastView]}>
                                                                <View style={[styles.statusView]}></View>
                                                            </View>
                                                        </View>

                                                        <Text style={[styles.messageSubTitle,{marginBottom:2, marginTop:5}]}>{item.date}</Text>
                                                        <Text style={[styles.messageSubTitle]}>{item.venue}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.trBottomView}>
                                                    <Text style={[styles.messageValues,]}>{item.message}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }else{
                                        return (
                                            <View key={index} style={[styles.tr]}>
                                            <View style={styles.trTopView}>
                                                <View style={styles.trImgView}>
                                                    <Image source={require('../../../assets/icons/senderImages.png')} style={[styles.trAvatar]} resizeMode={"cover"}/>
                                                </View>
                                                    <View style={[styles.messageBox]}>
                                                        <Text style={[styles.messageTitle, styles.review]}>{item.user} - {item.status}</Text>
                                                        <Text numberOfLines={3} style={[styles.messageSubTitle,{marginBottom:2, marginTop:5}]}>{item.date}</Text>
                                                        <Text style={[styles.messageSubTitle]}>{item.venue}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.trBottomView}>
                                                    <Text style={[styles.messageValues]}>{item.message}</Text>
                                                    <TouchableOpacity onPress={() =>console.log('here')}>
                                                        <View style={styles.LogInButton}>
                                                            <Text style={styles.buttonText}>
                                                                Write Review
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }
                                })
                            }
                        </View>
                    </ScrollView>

            {/*End of Main container*/}</View>
        );
    }
    onBackPress = () => {
        this.props.navigation.navigate('PROFILE');
    }
}

export default Inbox;

