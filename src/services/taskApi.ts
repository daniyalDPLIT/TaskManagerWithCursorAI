import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Task } from '../types/task';

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
            query: () => '/tasks',
            providesTags: ['Task'],
        }),
        getTaskById: builder.query<Task, string>({
            query: (id) => `/tasks/${id}`,
            providesTags: (_result, _err, id) => [{ type: 'Task', id }],
        }),
        addTask: builder.mutation<Task, Omit<Task, 'id'>>({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Task'],
        }),
        updateTask: builder.mutation<Task, Task>({
            query: (task) => ({
                url: `/tasks/${task.id}`,
                method: 'PUT',
                body: task,
            }),
            invalidatesTags: (_result, _err, { id }) => [{ type: 'Task', id }],
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task'],
        }),
        toggleTaskCompletion: builder.mutation<Task, string>({
            query: (id) => ({
                url: `/tasks/${id}/toggle`,
                method: 'PATCH',
                validateStatus: (response, result) =>
                    response.status === 200 && !result.error,
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
                try {
                    const { data: tasks } = (getState() as any).taskApi.queries['getTasks(undefined)'] || { data: [] };
                    const taskToUpdate = tasks.find((t: Task) => t.id === id);
                    if (taskToUpdate) {
                        dispatch(
                            taskApi.util.updateQueryData('getTasks', undefined, (draft) => {
                                const task = draft.find(t => t.id === id);
                                if (task) {
                                    task.completed = !task.completed;
                                }
                            })
                        );
                    }
                    await queryFulfilled;
                } catch {
                    dispatch(taskApi.util.invalidateTags(['Task']));
                }
            },
            invalidatesTags: (_result, _err, id) => [{ type: 'Task', id }],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskByIdQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useToggleTaskCompletionMutation,
} = taskApi; 