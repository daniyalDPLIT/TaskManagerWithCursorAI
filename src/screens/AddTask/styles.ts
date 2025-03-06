import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { wp, hp } from '../../utils/responsive';

export const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    form: {
        padding: wp(5),
    },
    label: {
        fontSize: wp(4),
        fontWeight: '600',
        color: colors.text,
        marginBottom: hp(1),
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: wp(4),
        fontSize: wp(4),
        color: colors.text,
        marginBottom: hp(0.5),
    },
    textArea: {
        height: hp(15),
        textAlignVertical: 'top',
    },
    errorText: {
        color: colors.error,
        fontSize: wp(3.5),
        marginBottom: hp(2),
    },
    dateButton: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: wp(4),
        marginBottom: hp(0.5),
    },
    dateButtonText: {
        fontSize: wp(4),
        color: colors.text,
    },
    typeContainer: {
        flexDirection: 'row',
        marginBottom: hp(3),
    },
    typeButton: {
        flex: 1,
        padding: hp(1),
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        marginHorizontal: wp(1),
        alignItems: 'center',
    },
    selectedType: {
        backgroundColor: colors.primary,
    },
    typeText: {
        fontSize: wp(3.5),
        color: colors.text,
    },
    selectedTypeText: {
        color: colors.white,
    },
    saveButton: {
        backgroundColor: colors.primary,
        padding: hp(1.5),
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonDisabled: {
        backgroundColor: colors.gray,
    },
    saveButtonText: {
        color: colors.white,
        fontSize: wp(4),
        fontWeight: '600',
    },
}); 