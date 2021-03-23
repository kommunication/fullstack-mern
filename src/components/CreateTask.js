import React from 'react'
import { useHistory } from 'react-router';
import { createTask } from '../api';
import { TaskForm } from './TaskForm'

export const CreateTask = () => {

    const history = useHistory();

    const onSubmit = async (data) => {
       await createTask(data)
       history.push("/")
    }

    return (
        <div className="container">
            <div class="mt-3">
                <h3>Create New Task</h3>
            </div> 
            <TaskForm  onSubmit={onSubmit} /> 
        </div>
    )
};