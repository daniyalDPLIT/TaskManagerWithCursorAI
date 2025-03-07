import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { wp, hp } from '../../../utils/responsive';
import colors from '../../../utils/colors';

type CustomTextStyle = TextStyle & {
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
};

interface Styles {
    container: ViewStyle;
    content: ViewStyle;
    form: ViewStyle;
    label: TextStyle;
    input: CustomTextStyle;
    inputError: ViewStyle;
    textArea: CustomTextStyle;
    dateButton: ViewStyle;
    dateButtonError: ViewStyle;
    dateButtonText: TextStyle;
    typeContainer: ViewStyle;
    typeButton: ViewStyle;
    selectedTypeButton: ViewStyle;
    typeText: TextStyle;
    selectedTypeText: TextStyle;
    errorText: TextStyle;
    saveButton: ViewStyle;
    saveButtonDisabled: ViewStyle;
    saveButtonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    form: {
        flex: 1,
        paddingVertical: hp(2),
    },
    label: {
        fontSize: wp(4),
        fontWeight: '600',
        marginBottom: hp(1),
        color: colors.text,
    },
    input: {
        borderRadius: wp(2),
        padding: wp(3),
        fontSize: wp(4),
        marginBottom: hp(2),
        backgroundColor: colors.surface,
        color: colors.text,
        borderColor: colors.border,
        borderWidth: 0.5,
    },
    inputError: {
        borderColor: colors.error,
        borderWidth: 0.5,
    },
    textArea: {
        height: hp(15),
        textAlignVertical: 'top',
        paddingTop: wp(3),
    },
    dateButton: {
        borderRadius: wp(2),
        padding: wp(3),
        marginBottom: hp(2),
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderWidth: 0.5,
    },
    dateButtonError: {
        borderColor: colors.error,
        borderWidth: 0.5,
    },
    dateButtonText: {
        fontSize: wp(4),
        color: colors.text,
    },
    typeContainer: {
        flexDirection: 'row',
        marginBottom: hp(3),
        marginTop: hp(1),
    },
    typeButton: {
        flex: 1,
        padding: wp(3),
        borderRadius: wp(2),
        marginHorizontal: wp(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderWidth: 0.5,
        minHeight: hp(6),
    },
    selectedTypeButton: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    typeText: {
        fontSize: wp(3.5),
        color: colors.text,
        textAlign: 'center',
    },
    selectedTypeText: {
        color: colors.white,
        fontWeight: '500',
    },
    errorText: {
        fontSize: wp(3.5),
        marginBottom: hp(1),
        color: colors.error,
        marginTop: -hp(1),
    },
    saveButton: {
        padding: wp(4),
        borderRadius: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(2),
        backgroundColor: colors.primary,
        minHeight: hp(7),
    },
    saveButtonDisabled: {
        backgroundColor: colors.gray,
        opacity: 0.7,
    },
    saveButtonText: {
        fontSize: wp(4),
        fontWeight: '600',
        color: colors.white,
    },
}); 