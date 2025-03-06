import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { wp, hp } from '../../utils/responsive';

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
        color: colors.textSecondary,
        fontWeight: '500',
    },
    overdueText: {
        color: colors.error,
    },
    taskContainer: {
        flexDirection: 'row',
        backgroundColor: colors.background,
        borderRadius: 10,
        padding: wp(4),
        shadowColor: colors.black,
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
        color: colors.text,
        marginBottom: hp(0.5),
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: colors.textSecondary,
    },
    note: {
        fontSize: wp(3.5),
        color: colors.textSecondary,
        marginBottom: hp(0.5),
    },
    typeContainer: {
        backgroundColor: colors.lightGray,
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.3),
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    typeText: {
        fontSize: wp(3),
        color: colors.text,
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