import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
 Platform,
    Text,
    View,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    ToolbarAndroid,
    Button
} from 'react-native';
import Image from 'react-native-remote-svg';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ImagePicker from 'react-native-image-picker';
import Requester, { getCurrencyRates, sendMessage } from '../../../utils/requester';
import styles from './styles';
import SplashScreen from 'react-native-smart-splash-screen';


class Chat extends Component {

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

    componentWillMount(){
        //Remove Splash
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 0,
            delay: 0,
        })
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({

        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const dicti = [{
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            key: 'sender',
            value: 'Hi Jaime! We are interseted in booking your place during our vacation . \nJesse',
            field: 'ios',
            date: '12 Jan'
        },{
            avatar_url: 'http://i0.kym-cdn.com/entries/icons/original/000/006/993/nickcage.jpg',
            key: 'sender',
            value: 'Hi Jaime! We are interseted in booking your place during our vacation . \nJesse',
            field: 'android',
            date: '15 Jan'
        },{
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            key: 'sender',
            value: 'Hi Jaime! We are interseted in booking your place during our vacation . \nJesse',
            field: 'ios',
            date: '15 Jan'
        },{
            avatar_url: 'http://i0.kym-cdn.com/entries/icons/original/000/006/993/nickcage.jpg',
            key: 'sender',
            value: 'Hi Jaime! We are interseted in booking your place during our vacation . \nJesse',
            field: 'android',
            date: '15 Jan'
        },];

        return (
            <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS === 'ios') ? 'padding' : null} enabled>

                <View style={styles.chatToolbar}>

                <TouchableOpacity onPress={this.onBackPress} style={{marginTop: 45, marginLeft: 15, marginBottom: 0}}>
                    <Image style={styles.btn_backImage} source={require('../../../../src/assets/svg/arrow-back.svg')} />
                </TouchableOpacity>

                </View>

                <View style={styles.requestView}>
                    <Text style={styles.requestTo}>Conversation with Jesse</Text>
                    <Text style={styles.requestTitle}>Garden Left Apartment</Text>
                    <View style={styles.dateWrapper}>
                        <Text style={styles.dateText}>Thu 25 Jan - Sat 27 Jan</Text>
                        <SeparatorDot height={25} width={15}/>
                        <Text style={styles.dateText}>2 guests</Text>
                        <SeparatorDot height={26} width={15}/>
                        <Text style={styles.price}>$615 </Text>
                    </View>
                    <View style={styles.requestButtonView}>
                        <TouchableOpacity style={styles.btn_requestapproveView}>
                            <Text style={styles.btn_requestapprove}>Approve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_requestdeclineView}>
                            <Text style={styles.btn_requestdecline}>Decline</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <FlatList style={styles.listBg}
                    data={dicti}// Data source
                    renderItem={({ item }) =>
                        (
                        <View>{/* Main View inside flat list */}

                            <View style={item.field === 'ios' ? styles.rowStyle : styles.hiddenRow}>{/* User 1 View inside flat list */}
                                <Image style={item.field === 'ios' && styles.imageStyle}
                                source={{uri: item.avatar_url}}
                                />
                                <View style={item.field === 'ios' && styles.viewStyle}>
                                <Text style={item.field === 'ios' && styles.listChild}>{item.field === 'ios' && item.value}</Text>
                                <Text style={item.field === 'ios' && styles.listChild}>{item.field === 'ios' && item.date}</Text>
                                </View>
                            </View>
                            <View style={item.field === 'android' ? styles.rowStyleSender : styles.hiddenRow}>{/* User 2 View inside flat list */}
                                <View style={item.field === 'android' && styles.viewStyleSender}>
                                    <Text style={item.field === 'android' && styles.listChildSender}>{item.field === 'android' && item.value}</Text>
                                    <Text style={item.field === 'android' && styles.listChildSender}>{item.field === 'android' && item.date}</Text>
                                </View>
                                <Image style={item.field === 'android' && styles.imageStyleSender}
                                 source={{uri: item.avatar_url}}/>

                            </View>



                        </View>
                        )
                    }
                />


                <View style={styles.footerView}>{/* Footer View for sending message etc */}

                    <TextInput
                                                style={styles.footerInputText}
                        underlineColorAndroid="rgba(0,0,0,0)" // Removing android underline for default edittext
                        placeholder="Write message"
                        // onChangeText={(text) => this.setState({text})} for future
                        // value={this.state.text} for future
                    />

                    <TouchableOpacity onPress={this.onCameraPress}>

                        <Image style={styles.btn_cameraImage} source={require('../../../../src/assets/camera.png')} />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onGalleryPress}>

                        <Image style={styles.btn_galleryImage} source={require('../../../../src/assets/gallery.png')} />

                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>// Ending Main View
        );
    }

    // Methods
    onCameraPress = () => {
        // ImagePickerIOS.openSelectDialog({}, imageUri => {
        //   this.setState({ image: imageUri });
        // }, error => console.log(error));
        // ImagePicker.launchCamera(this.options, (response)  => {
        //   // Same code as in above section!
        // });
        ImagePicker.launchCamera({}, (response) => {
        // Same code as in above section!
        });
    }

    onGalleryPress = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
        // Same code as in above section!
        });
    }
    onBackPress = () => {
        this.props.navigation.navigate('MESSAGES');
    }

    sendMessage = () => {
        sendMessage('amad',17)
        .then(response => {
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
        console.log('api hit');
    }
}

function SeparatorDot(props) {
    return (
        <View style={{height: props.height, width: props.width, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 3, width: 3, backgroundColor: '#000', borderRadius: 1.5}}></View>
        </View>
    )
}

export default Chat;
