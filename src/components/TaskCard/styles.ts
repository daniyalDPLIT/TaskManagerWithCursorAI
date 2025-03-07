import { StyleSheet } from 'react-native';
import { wp, hp } from '../../utils/responsive';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: hp(2),
    },
    dateContainer: {
        paddingHorizontal: wp(5),
        marginBottom: hp(1),
    },
    dateText: {
        fontSize: wp(3.5),
        fontWeight: '500',
    },
    overdueText: {
        color: colors.error,
    },
    taskContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: wp(4),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    checkbox: {
        marginRight: wp(3),
        justifyContent: 'center',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: wp(4),
        fontWeight: '600',
        marginBottom: hp(0.5),
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: colors.textSecondary,
    },
    note: {
        fontSize: wp(3.5),
        marginBottom: hp(0.5),
    },
    typeContainer: {
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.3),
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    typeText: {
        fontSize: wp(3),
        textTransform: 'capitalize',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        marginLeft: wp(3),
    },
}); 