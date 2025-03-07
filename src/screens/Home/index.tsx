import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useTheme } from '../../context/ThemeContext';
import { RootStackParamList } from '../../routes/AppNavigator';
import { useGetTasksQuery } from '../../services/taskApi';
import { getColors } from '../../utils/colors';
import { wp } from '../../utils/responsive';
import { styles } from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { data: tasks = [], isLoading, error, refetch } = useGetTasksQuery();
    const { isDarkMode } = useTheme();
    const colors = getColors(isDarkMode);

    const stats = {
        all: tasks.length,
        today: tasks.filter(task => {
            const today = new Date();
            const taskDate = new Date(task.dueDate);
            return (
                today.getDate() === taskDate.getDate() &&
                today.getMonth() === taskDate.getMonth() &&
                today.getFullYear() === taskDate.getFullYear()
            );
        }).length,
        completed: tasks.filter(task => task.completed).length,
    };

    if (isLoading) {
        return (
            <ScreenWrapper>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </ScreenWrapper>
        );
    }

    if (error) {
        return (
            <ScreenWrapper>
                <View style={styles.errorContainer}>
                    <Text style={[styles.errorText, { color: colors.error }]}>Failed to fetch tasks</Text>
                    <TouchableOpacity
                        style={[styles.retryButton, { backgroundColor: colors.primary }]}
                        onPress={refetch}>
                        <Text style={[styles.retryButtonText, { color: colors.white }]}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </ScreenWrapper>
        );
    }

    return (
        <ScreenWrapper>
            <ScrollView style={[styles.scrollView, { backgroundColor: colors.background }]}>
                <View style={styles.header}>
                    <Text style={[styles.title, { color: colors.text }]}>Task Manager</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.primary }]}
                        onPress={() => navigation.navigate('All', { type: 'All' })}>
                        <Icon name="list" size={wp(10)} color={colors.white} />
                        <Text style={[styles.cardTitle, { color: colors.white }]}>All</Text>
                        <Text style={[styles.cardCount, { color: colors.white }]}>{stats.all}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.success }]}
                        onPress={() => navigation.navigate('Today', { type: 'Today' })}>
                        <Icon name="today" size={wp(10)} color={colors.white} />
                        <Text style={[styles.cardTitle, { color: colors.white }]}>Today</Text>
                        <Text style={[styles.cardCount, { color: colors.white }]}>{stats.today}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.info }]}
                        onPress={() => navigation.navigate('Completed', { type: 'Completed' })}>
                        <Icon name="checkmark-circle" size={wp(10)} color={colors.white} />
                        <Text style={[styles.cardTitle, { color: colors.white }]}>Completed</Text>
                        <Text style={[styles.cardCount, { color: colors.white }]}>{stats.completed}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[styles.addButton, { backgroundColor: colors.primary }]}
                onPress={() => navigation.navigate('AddTask', {})}>
                <Icon name="add" size={wp(8)} color={colors.white} />
            </TouchableOpacity>
        </ScreenWrapper>
    );
};

export default HomeScreen; 