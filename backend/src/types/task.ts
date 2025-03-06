export interface Task {
    id: string;
    title: string;
    note: string;
    type: 'office' | 'home' | 'personal';
    completed: boolean;
    dueDate: string;
} 