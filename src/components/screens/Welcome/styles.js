import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#DA7B61'
    },
    splashImage: {
        width: 80,
        height: 58
    },
    buttonCollectionWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        marginHorizontal: 48
    },
    logInButton: {
        marginBottom: 20,
        borderColor: 'white',
        borderWidth: 1.5
    },
    facebookButton: {
        backgroundColor: '#233842',
        flexDirection: 'row',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 3,
        // flex: 1
    },
    createAccountButton: {
        marginTop: 20
    },
    titleText: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'FuturaStd-Light',
        marginBottom: 73
    },
    finePrintText: {
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
        color: '#fff',
        fontSize: 13,
        fontFamily: 'FuturaStd-Light'
    },
    lowOpacity: {
        opacity: 0.3,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    getStartedImage: {
        width: 400,
        height: 80
    },
    btn_facebookIcon:{
        width: 8,
        height: 18,
        marginRight: 10,
    },
    facebookButtonText:{
        color: '#fff'
    },
    appName: {
        fontSize: 41,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 4
    },
    appNameLeft: {
        marginRight: -8
    },
    appNameRight: {
        marginLeft: -8
    },
    closeButtonWrapper: {
        position: 'absolute',
        left: 20,
        top: 45
    },
    closeButton: {
        width: 25,
        height: 25
    }
});


export default styles;
