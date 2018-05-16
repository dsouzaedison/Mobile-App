import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#DA7B61'
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleView: {
        display: 'flex',
        width: '100%',
        marginTop: 16,
        marginLeft: 36,
        marginBottom: 16
    },
    titleText: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'FuturaStd-Light'
    },
    finePrintText: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'FuturaStd-Light',
        margin: 10,
        marginBottom: 15
    },
    inputView: {
        width: '100%',
        margin: 11.5,
        paddingLeft: 18,
        paddingRight: 18
    },
    subTitleView: {
        display: 'flex',
        width: '100%',
        marginTop: 16,
        marginLeft: 36
    },
    nextButtonView: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        paddingRight: 18,
        marginTop: 36
    },
    nextButton: {
        height: 50,
        width: 50,
        backgroundColor: '#273842',
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        paddingLeft: 2,
        paddingBottom: 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 17
    },
    lowOpacity: {
        opacity: 0.3
    },
    getStartedImage: {
        width: 400,
        height: 80
    },
     btn_backImage:{
        height: 28,
        width: 28,
        marginTop: 24,
        marginLeft: 16,
      }
});
export default styles;