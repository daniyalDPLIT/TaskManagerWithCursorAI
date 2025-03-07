import { StyleSheet } from 'react-native';
import { wp } from '../../utils/responsive';

export const styles = StyleSheet.create({
    container: {
        width: wp(10),
        height: wp(10),
        borderRadius: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp(4),
    },
}); 