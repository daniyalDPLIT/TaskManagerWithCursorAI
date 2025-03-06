import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';

interface ScreenWrapperProps {
    children: React.ReactNode;
    backgroundColor?: string;
    barStyle?: 'light-content' | 'dark-content';
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
    children,
    backgroundColor = colors.background,
    barStyle = 'dark-content',
}) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor }]}>
            <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
            {children}
        </SafeAreaView>
    );
};

export default ScreenWrapper; 