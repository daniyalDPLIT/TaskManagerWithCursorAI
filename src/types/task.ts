export type TaskType = 'office' | 'home' | 'personal';

export interface Task {
    id: string;
    title: string;
    note: string;
    type: TaskType;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    dueDate: Date;
}

export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
} 