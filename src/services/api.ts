import { Task } from '../types/task';

const API_URL = 'http://localhost:3000/api';

export const api = {
    async getAllTasks(): Promise<Task[]> {
        const response = await fetch(`${API_URL}/tasks`);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        return response.json();
    },

    async getTaskById(id: string): Promise<Task> {
        const response = await fetch(`${API_URL}/tasks/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch task');
        }
        return response.json();
    },

    async createTask(task: Omit<Task, 'id'>): Promise<Task> {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
        return response.json();
    },

    async updateTask(id: string, task: Partial<Task>): Promise<Task> {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
        return response.json();
    },

    async deleteTask(id: string): Promise<void> {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
    },

    async toggleTaskCompletion(id: string): Promise<Task> {
        const response = await fetch(`${API_URL}/tasks/${id}/toggle`, {
            method: 'PATCH',
        });
        if (!response.ok) {
            throw new Error('Failed to toggle task completion');
        }
        return response.json();
    },
}; 