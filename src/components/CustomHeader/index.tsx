import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import colors from '../../utils/colors';

interface CustomHeaderProps {
    title: string;
    showBack?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showBack = true }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.leftContainer}>
                {showBack && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                        <Icon name="chevron-back" size={28} color={colors.primary} />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightContainer} />
        </View>
    );
};

export default CustomHeader; 