import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { styles } from './styles';

interface CustomHeaderProps {
    title: string;
    showBack?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showBack = true }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {showBack && (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default CustomHeader; 