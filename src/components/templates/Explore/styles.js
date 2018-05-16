import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#f0f1f3'
    },
    searchAreaView: {
        width: '100%',
        height: 105,
        backgroundColor: '#f0f1f3',
        paddingTop: 40,
        paddingLeft: 17,
        paddingRight: 17
    },
    sectionView: {
        width: '100%',
        paddingLeft: 17,
        paddingRight: 17
    },
    subtitleView: {
        width: '100%',
        paddingTop: 18,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: '#cc8068'
    },
    subtitleText: {
        fontSize: 16,
        fontFamily: 'FuturaStd-Light'
    },
    tilesView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    text: {
        color: '#000'
    },
    section1: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 18,
        marginRight: 18
    },
    dateView: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    },
    btnCheckInDate: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    btnCheckOutDate: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    btnGuests: {
        flex: 0.3,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    btn_text: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 16,
        color: '#1f2427',
        paddingTop: 10
    },
    betweenButtons: {
        marginTop: 8,
        marginBottom: 8,
        width: 1,
        backgroundColor: '#ccc'
    },
    btn_subtext: {
        fontFamily: 'FuturaStd-Light',
        fontSize: 12,
        color: '#d97b61',
        paddingBottom: 10
    },
    btnSettings: {
        flex: 0.25,
        marginLeft: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 15
    },
    btn_SettingImages: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    btnSearch: {
        margin: 10,
        marginLeft: 18,
        marginRight: 18,
        padding: 14,
        alignItems: 'center',
        backgroundColor: '#cc8068'
    },
    searchText: {

        fontFamily: 'FuturaStd-Light',
        fontSize: 20,
        color: '#fff'
    }
});
export default styles;
