import React from 'react';
import { FlatList } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { toggleTaskCompletion, deleteTask } from '../../redux/slices/taskSlice';
import { Task } from '../../types/task';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppNavigator';
import { styles } from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import CustomHeader from '../../components/CustomHeader';
import TaskCard from '../../components/TaskCard';

type TaskListScreenProps = NativeStackScreenProps<RootStackParamList, 'All' | 'Today' | 'Completed'>;

const TaskListScreen: React.FC<TaskListScreenProps> = ({ route, navigation }) => {
    const { type } = route.params;
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.tasks.tasks);

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

    const handleToggle = (id: string) => {
        dispatch(toggleTaskCompletion(id));
    };

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id));
    };

    const handleEdit = (task: Task) => {
        navigation.navigate('AddTask', { task });
    };

    return (
        <ScreenWrapper>
            <CustomHeader title={type} />
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
            />
        </ScreenWrapper>
    );
};

export default TaskListScreen; 