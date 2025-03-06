import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Task } from '../../types/task';
import { colors } from '../../utils/colors';
import { styles } from './styles';

interface TaskCardProps {
    task: Task;
    onToggle: (id: string) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onEdit, onDelete }) => {
    const formattedDueDate = new Date(task.dueDate).toLocaleDateString();
    const isOverdue = !task.completed && new Date(task.dueDate) < new Date();

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={[styles.dateText, isOverdue && styles.overdueText]}>
                    Due: {formattedDueDate}
                </Text>
            </View>
            <View style={styles.taskContainer}>
                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => onToggle(task.id)}>
                    <Icon
                        name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
                        size={24}
                        color={task.completed ? colors.success : colors.gray}
                    />
                </TouchableOpacity>
                <View style={styles.content}>
                    <Text
                        style={[
                            styles.title,
                            task.completed && styles.completedText,
                        ]}>
                        {task.title}
                    </Text>
                    <Text style={styles.note}>{task.note}</Text>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeText}>{task.type}</Text>
                    </View>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => onEdit(task)}>
                        <Icon name="pencil" size={20} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => onDelete(task.id)}>
                        <Icon name="trash-outline" size={20} color={colors.error} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TaskCard; 