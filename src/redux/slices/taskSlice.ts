import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from '../../types/task';
import { api } from '../../services/api';

interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const tasks = await api.getAllTasks();
    return tasks;
});

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (task: Omit<Task, 'id'>) => {
        const newTask = await api.createTask(task);
        return newTask;
    },
);

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (task: Task) => {
        const updatedTask = await api.updateTask(task.id, task);
        return updatedTask;
    },
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id: string) => {
        await api.deleteTask(id);
        return id;
    },
);

export const toggleTaskCompletion = createAsyncThunk(
    'tasks/toggleTaskCompletion',
    async (id: string) => {
        const updatedTask = await api.toggleTaskCompletion(id);
        return updatedTask;
    },
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // Fetch Tasks
            .addCase(fetchTasks.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks';
            })
            // Add Task
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            // Update Task
            .addCase(updateTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(
                    task => task.id === action.payload.id,
                );
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            // Delete Task
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(
                    task => task.id !== action.payload,
                );
            })
            // Toggle Task Completion
            .addCase(toggleTaskCompletion.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(
                    task => task.id === action.payload.id,
                );
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            });
    },
});

export default taskSlice.reducer; 