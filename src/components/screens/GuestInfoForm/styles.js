import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    backButton: {
        marginLeft: 10,
        marginBottom: 40
    },
    btn_backImage:{
        height: 50,
        width: 50,
        marginTop: 24
    },
    steps: {
        color: '#afafaf'
    },
    content: {
        paddingHorizontal: 20
    },
    heading: {
        marginTop: 5,
        fontSize: 24,
        fontWeight: '400',
        marginBottom: 25
    },
    hotelInfoContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    hotelThumbView: {
        flex: 0.3
    },
    hotelInfoView: {
        flex: 0.7,
        paddingTop: 7,
        paddingHorizontal: 8
    },
    hotelThumb: {
        resizeMode: 'cover',
        width: '100%',
        height: 60
    },
    floatingBar: {
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailsView: {
        flex: 1,
        padding: 8
    },
    nextButtonView: {
        flex: 1,
        alignItems: 'center'
    },
    nextButton: {
        backgroundColor: '#DA7B61',
        margin: 5,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    nextText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '100',
        fontFamily: 'FuturaStd-Light'
    },
    pricePeriodWrapper: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingVertical: 2
    },
    price: {
        fontSize: 18
    },
    hotelName: {
        fontSize: 17,
        fontWeight: '400'
    },
    hotelPlace: {
        fontSize: 12,
        color: '#7c7c7c',
        fontWeight: '100'
    },
    period1: {
        marginTop: 5,
        fontSize: 12,
        color: '#535353',
        fontWeight: '100'
    },
    period2: {
        marginTop: 3,
        fontSize: 12,
        color: '#535353',
        fontWeight: '100'
    },
    bold400: {
        fontWeight: '400'
    },
    fontFuturaStd: {
        fontFamily: 'FuturaStd-Light'
    },
    form: {
        marginTop: 20
    },
    labelGuest: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 18
    },
    inputFieldsView: {
        flexDirection: 'row',
        marginTop: 10
    },
    genderFlex: {
        flex: 0.2
    },
    firstNameFlex: {
        flex: 0.4
    },
    lastNameFlex: {
        flex: 0.4
    },
    gender: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        shadowColor: '#858585',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.5
    },
    formField: {
        height: 50,
        backgroundColor: '#fff',
        textAlign: 'center',
        shadowColor: '#858585',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        fontSize: 18,
        fontFamily: 'FuturaStd-Light'
    },
    genderText: {
        fontSize: 18,
        fontFamily: 'FuturaStd-Light'
    },
    spaceRight: {
        marginRight: 10
    },
    guestInfoWrapper: {
        marginTop: 15
    }
});

export default styles;
