import React from 'react';
import { FlatList, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import TaskCard from '../../components/TaskCard';
import CustomHeader from '../../components/CustomHeader';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Task } from '../../types/task';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppNavigator';
import { styles } from './styles';
import {
    useGetTasksQuery,
    useToggleTaskCompletionMutation,
    useDeleteTaskMutation
} from '../../services/taskApi';
import colors from '../../utils/colors';

type TaskListScreenProps = NativeStackScreenProps<RootStackParamList, 'All' | 'Today' | 'Completed'>;

const TaskListScreen: React.FC<TaskListScreenProps> = ({ route, navigation }) => {
    const { type } = route.params;
    const { data: tasks = [], isLoading, error, refetch } = useGetTasksQuery();
    const [toggleTask] = useToggleTaskCompletionMutation();
    const [deleteTask] = useDeleteTaskMutation();

    const filteredTasks = tasks.filter(task => {
        if (type === 'Completed') return task.completed;
        if (type === 'Today') {
            const today = new Date();
            const taskDate = new Date(task.dueDate);
            return (
                today.getDate() === taskDate.getDate() &&
                today.getMonth() === taskDate.getMonth() &&
                today.getFullYear() === taskDate.getFullYear()
            );
        }
        return true;
    });

    const sortedTasks = [...filteredTasks].sort((a, b) => {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

    const handleToggle = async (id: string) => {
        try {
            const result = await toggleTask(id).unwrap();
            if (!result) {
                console.error('Failed to toggle task: Task not found');
            }
        } catch (error: any) {
            console.error('Failed to toggle task:', error?.data?.error || 'Unknown error');
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteTask(id).unwrap();
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const handleEdit = (task: Task) => {
        navigation.navigate('AddTask', { task });
    };

    if (isLoading) {
        return (
            <ScreenWrapper>
                <CustomHeader title={type} />
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            </ScreenWrapper>
        );
    }

    if (error) {
        return (
            <ScreenWrapper>
                <CustomHeader title={type} />
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Failed to fetch tasks</Text>
                    <TouchableOpacity
                        style={styles.retryButton}
                        onPress={refetch}>
                        <Text style={styles.retryButtonText}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </ScreenWrapper>
        );
    }

    return (
        <ScreenWrapper>
            <CustomHeader title={type} />
            <View style={styles.container}>
                <FlatList
                    data={sortedTasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TaskCard
                            task={item}
                            onToggle={handleToggle}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>
                                No {type.toLowerCase()} tasks found
                            </Text>
                        </View>
                    }
                />
            </View>
        </ScreenWrapper>
    );
};

export default TaskListScreen; 