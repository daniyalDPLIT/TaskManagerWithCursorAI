import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { wp } from '../../utils/responsive';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppNavigator';
import { styles } from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import { fetchTasks } from '../../redux/slices/taskSlice';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const dispatch = useAppDispatch();
    const { tasks, loading, error } = useAppSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

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

    if (loading) {
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
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity
                        style={styles.retryButton}
                        onPress={() => dispatch(fetchTasks())}>
                        <Text style={styles.retryButtonText}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </ScreenWrapper>
        );
    }

    return (
        <ScreenWrapper>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>Task Manager</Text>
                </View>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.primary }]}
                        onPress={() => navigation.navigate('All', { type: 'All' })}>
                        <Icon name="list" size={wp(10)} color={colors.white} />
                        <Text style={styles.cardTitle}>All</Text>
                        <Text style={styles.cardCount}>{stats.all}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.success }]}
                        onPress={() => navigation.navigate('Today', { type: 'Today' })}>
                        <Icon name="today" size={wp(10)} color={colors.white} />
                        <Text style={styles.cardTitle}>Today</Text>
                        <Text style={styles.cardCount}>{stats.today}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.info }]}
                        onPress={() => navigation.navigate('Completed', { type: 'Completed' })}>
                        <Icon name="checkmark-circle" size={wp(10)} color={colors.white} />
                        <Text style={styles.cardTitle}>Completed</Text>
                        <Text style={styles.cardCount}>{stats.completed}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddTask', {})}>
                <Icon name="add" size={wp(8)} color={colors.white} />
            </TouchableOpacity>
        </ScreenWrapper>
    );
};

export default HomeScreen; 