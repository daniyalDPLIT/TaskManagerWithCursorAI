import express from 'express';
import { taskService } from '../services/taskService';
import { Task } from '../types/task';

const router = express.Router();

// Get all tasks
router.get('/', (req, res) => {
    try {
        const tasks = taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// Get task by ID
router.get('/:id', (req, res) => {
    try {
        const task = taskService.getTaskById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch task' });
    }
});

// Create new task
router.post('/', (req, res) => {
    try {
        const task = taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

// Update task
router.put('/:id', (req, res) => {
    try {
        const task = taskService.updateTask(req.params.id, req.body);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});

// Delete task
router.delete('/:id', (req, res) => {
    try {
        const success = taskService.deleteTask(req.params.id);
        if (!success) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

// Toggle task completion
router.patch('/:id/toggle', (req, res) => {
    try {
        const task = taskService.toggleTaskCompletion(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to toggle task completion' });
    }
});

export default router; 