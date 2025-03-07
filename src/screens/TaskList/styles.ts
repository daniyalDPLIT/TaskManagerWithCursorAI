import { StyleSheet } from 'react-native';
import { wp, hp } from '../../utils/responsive';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContent: {
        paddingBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5),
        backgroundColor: colors.background,
    },
    errorText: {
        fontSize: wp(4),
        textAlign: 'center',
        marginBottom: hp(2),
        color: colors.error,
    },
    retryButton: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        borderRadius: 8,
        backgroundColor: colors.primary,
    },
    retryButtonText: {
        fontSize: wp(4),
        fontWeight: '600',
        color: colors.white,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp(5),
        marginTop: hp(10),
    },
    emptyText: {
        fontSize: wp(4),
        textAlign: 'center',
        color: colors.textSecondary,
    },
}); 