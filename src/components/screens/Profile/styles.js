import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee'
    },
    card: {
        backgroundColor: '#d87a61',
        width: null,
        height: 180,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 15,
        elevation: 2
    },
    transparentLogoWrapper: {
        position: 'absolute',
        left: 5,
        bottom: 0,
        height: 105,
        width: 135,
    },
    logoTransparent: {
        height: 130,
        width: 140,
        opacity: 0.15
    },
    cardFAB: {
        position: 'absolute',
        right: 20,
        bottom: 25,
        height: 40,
        width: 40,
        backgroundColor: '#2a2a2a',
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center'
    },
    FAB: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '800',
        lineHeight: 36
    },
    cardContentsWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    cardRowOne: {
        flex: 1
    },
    cardRowTwo: {
        flex: 1,
        justifyContent: 'center'
    },
    cardRowThree: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    cardLogo: {
        height: 50,
        width: 54,
    },
    cardNumber: {
        fontFamily: 'FuturaStd-Light',
        color: '#fff',
        fontWeight: '200'
    },
    cardPropertyName: {
        fontFamily: 'futura',
        fontSize: 11,
        color: '#fff',
        marginBottom: 5,
        opacity: 0.9
    },
    cardBalance: {
        fontFamily: 'futura',
        fontSize: 18,
        color: '#fff',
        fontWeight: '400'
    },
    copyAddress: {
        width: null,
        marginHorizontal: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 15,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8
    },
    copyAddressText: {
        fontFamily: 'FuturaStd-Light',
        fontWeight: '100',
        color: '#555',
        fontSize: 13
    },
    listItem: {
        flex: 1,
        alignContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    listItemNameWrapper: {
        marginTop: 25,
        marginBottom: 25,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    listItemIconWrapper: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'flex-end',
        flexWrap: 'wrap',
    },
    listItemText: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        fontWeight: '100',
        opacity: 0.8
    },
    listItemIcon: {
        fontSize: 18,
        opacity: 0.8
    },
    usd: {
        fontFamily: 'FuturaStd-Light',
        color: '#d87a61',
        fontSize: 18,
        fontWeight: '100'
    },
    backButton: {
        marginLeft: 10,
        marginBottom: 40
    },
    backButtonIcon: {
        fontSize: 22
    },
    menuIcons:{
        width: 20,
        height: 23,
        alignItems: 'center',
        position: 'relative',
        resizeMode: 'contain'
    },
    currencyText:{
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        color: '#cc8068',
        paddingTop: 20,
        paddingBottom: 20,
    },
    btn_backImage:{
        height: 50,
        width: 50,
        marginTop: 24,
        resizeMode: 'contain'
      },
});

export default styles;
