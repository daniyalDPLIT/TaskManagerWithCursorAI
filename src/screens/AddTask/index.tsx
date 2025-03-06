import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';
import { useAppDispatch } from '../../redux/store';
import { addTask, updateTask } from '../../redux/slices/taskSlice';
import { colors } from '../../utils/colors';
import { Task, TaskType } from '../../types/task';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppNavigator';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import CustomHeader from '../../components/CustomHeader';

type AddTaskScreenProps = NativeStackScreenProps<RootStackParamList, 'AddTask'>;

const taskTypes: TaskType[] = ['office', 'home', 'personal'];

interface ValidationErrors {
    title?: string;
    note?: string;
    dueDate?: string;
}

const AddTaskScreen: React.FC<AddTaskScreenProps> = ({ route, navigation }) => {
    const dispatch = useAppDispatch();
    const editingTask = route.params?.task;

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [type, setType] = useState<TaskType>('personal');
    const [dueDate, setDueDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [errors, setErrors] = useState<ValidationErrors>({});

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setNote(editingTask.note);
            setType(editingTask.type);
            setDueDate(new Date(editingTask.dueDate));
        }
    }, [editingTask]);

    const validateForm = (): boolean => {
        const newErrors: ValidationErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (!note.trim()) {
            newErrors.note = 'Note is required';
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(dueDate);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            newErrors.dueDate = 'Due date cannot be in the past';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (!validateForm()) return;

        if (editingTask) {
            dispatch(
                updateTask({
                    ...editingTask,
                    title: title.trim(),
                    note: note.trim(),
                    type,
                    dueDate,
                }),
            );
        } else {
            dispatch(
                addTask({
                    title: title.trim(),
                    note: note.trim(),
                    type,
                    completed: false,
                    dueDate,
                }),
            );
        }

        navigation.goBack();
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setDueDate(selectedDate);
            // Clear due date error when a new date is selected
            if (errors.dueDate) {
                setErrors(prev => ({ ...prev, dueDate: undefined }));
            }
        }
    };

    const isFormValid = () => {
        return (
            title.trim() !== '' &&
            note.trim() !== '' &&
            !errors.dueDate &&
            Object.keys(errors).length === 0
        );
    };

    return (
        <ScreenWrapper>
            <CustomHeader title={editingTask ? 'Edit Task' : 'Add Task'} />
            <ScrollView style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={[
                            styles.input,
                            errors.title && { borderColor: colors.error, borderWidth: 1 },
                        ]}
                        value={title}
                        onChangeText={text => {
                            setTitle(text);
                            if (errors.title) {
                                setErrors(prev => ({ ...prev, title: undefined }));
                            }
                        }}
                        placeholder="Enter task title"
                        placeholderTextColor={colors.textSecondary}
                    />
                    {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

                    <Text style={styles.label}>Note</Text>
                    <TextInput
                        style={[
                            styles.input,
                            styles.textArea,
                            errors.note && { borderColor: colors.error, borderWidth: 1 },
                        ]}
                        value={note}
                        onChangeText={text => {
                            setNote(text);
                            if (errors.note) {
                                setErrors(prev => ({ ...prev, note: undefined }));
                            }
                        }}
                        placeholder="Enter task note"
                        placeholderTextColor={colors.textSecondary}
                        multiline
                        numberOfLines={4}
                    />
                    {errors.note && <Text style={styles.errorText}>{errors.note}</Text>}

                    <Text style={styles.label}>Due Date</Text>
                    <TouchableOpacity
                        style={[
                            styles.dateButton,
                            errors.dueDate && { borderColor: colors.error, borderWidth: 1 },
                        ]}
                        onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.dateButtonText}>
                            {dueDate.toLocaleDateString()}
                        </Text>
                    </TouchableOpacity>
                    {errors.dueDate && <Text style={styles.errorText}>{errors.dueDate}</Text>}

                    {showDatePicker && (
                        <DateTimePicker
                            value={dueDate}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={handleDateChange}
                            minimumDate={new Date()}
                        />
                    )}

                    <Text style={styles.label}>Type</Text>
                    <View style={styles.typeContainer}>
                        {taskTypes.map(taskType => (
                            <TouchableOpacity
                                key={taskType}
                                style={[
                                    styles.typeButton,
                                    type === taskType && styles.selectedType,
                                ]}
                                onPress={() => setType(taskType)}>
                                <Text
                                    style={[
                                        styles.typeText,
                                        type === taskType && styles.selectedTypeText,
                                    ]}>
                                    {taskType.charAt(0).toUpperCase() + taskType.slice(1)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.saveButton,
                            !isFormValid() && styles.saveButtonDisabled,
                        ]}
                        onPress={handleSave}
                        disabled={!isFormValid()}>
                        <Text style={styles.saveButtonText}>Save Task</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
};

export default AddTaskScreen; 