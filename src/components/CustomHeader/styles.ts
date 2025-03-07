import { StyleSheet } from 'react-native';
import { wp, hp } from '../../utils/responsive';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(7),
        borderBottomWidth: 0.5,
        borderBottomColor: colors.border,
        paddingHorizontal: wp(4),
        backgroundColor: colors.background,
        marginBottom: hp(2),
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        alignItems: 'center',
    },
    rightContainer: {
        flex: 1,
    },
    backButton: {
        padding: 4,
    },
    title: {
        fontSize: wp(4.5),
        fontWeight: '600',
        color: colors.text,
    },
}); 