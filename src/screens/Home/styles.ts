import { StyleSheet } from 'react-native';
import { wp, hp } from '../../utils/responsive';

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    header: {
        padding: wp(5),
        paddingTop: hp(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: wp(7),
        fontWeight: 'bold',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: wp(4),
        justifyContent: 'space-between',
    },
    card: {
        width: wp(42),
        height: wp(42),
        borderRadius: 15,
        padding: wp(4),
        marginBottom: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: wp(4),
        fontWeight: '600',
        marginTop: hp(1),
    },
    cardCount: {
        fontSize: wp(6),
        fontWeight: 'bold',
        marginTop: hp(0.5),
    },
    addButton: {
        position: 'absolute',
        right: wp(5),
        bottom: hp(5),
        width: wp(15),
        height: wp(15),
        borderRadius: wp(7.5),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5),
    },
    errorText: {
        fontSize: wp(4),
        textAlign: 'center',
        marginBottom: hp(2),
    },
    retryButton: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        borderRadius: 8,
    },
    retryButtonText: {
        fontSize: wp(4),
        fontWeight: '600',
    },
}); 