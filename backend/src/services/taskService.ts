import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/task';

const DB_PATH = path.join(__dirname, '../data/tasks.json');

interface Database {
    tasks: Task[];
}

class TaskService {
    private db: Database;

    constructor() {
        this.db = this.loadDatabase();
    }

    private loadDatabase(): Database {
        try {
            const data = fs.readFileSync(DB_PATH, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            return { tasks: [] };
        }
    }

    private saveDatabase(): void {
        fs.writeFileSync(DB_PATH, JSON.stringify(this.db, null, 2));
    }

    getAllTasks(): Task[] {
        return this.db.tasks;
    }

    getTaskById(id: string): Task | undefined {
        return this.db.tasks.find(task => task.id === id);
    }

    createTask(task: Omit<Task, 'id'>): Task {
        const newTask: Task = {
            ...task,
            id: uuidv4(),
        };
        this.db.tasks.push(newTask);
        this.saveDatabase();
        return newTask;
    }

    updateTask(id: string, task: Partial<Task>): Task | undefined {
        const index = this.db.tasks.findIndex(t => t.id === id);
        if (index === -1) return undefined;

        this.db.tasks[index] = {
            ...this.db.tasks[index],
            ...task,
        };
        this.saveDatabase();
        return this.db.tasks[index];
    }

    deleteTask(id: string): boolean {
        const index = this.db.tasks.findIndex(task => task.id === id);
        if (index === -1) return false;

        this.db.tasks.splice(index, 1);
        this.saveDatabase();
        return true;
    }

    toggleTaskCompletion(id: string): Task | undefined {
        const task = this.getTaskById(id);
        if (!task) return undefined;

        return this.updateTask(id, { completed: !task.completed });
    }
}

export const taskService = new TaskService(); 