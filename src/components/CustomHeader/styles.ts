import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { wp, hp } from '../../utils/responsive';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(7),
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingHorizontal: wp(5),
    },
    backButton: {
        marginRight: wp(3),
    },
    title: {
        fontSize: wp(5),
        fontWeight: '600',
        color: colors.text,
    },
}); 