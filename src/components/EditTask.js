import {useState, useEffect} from 'react'
import { useRouteMatch, useHistory } from 'react-router';
import { getTask, updateTask } from '../api';
import { TaskForm } from './TaskForm';


export const EditTask = () => {
    const match = useRouteMatch();
    const [task, setTask] = useState()
    const history = useHistory();

    useEffect(() => {
        
        const fetchTask = async () => {
            const _task = await getTask(match.params.id);
            setTask(_task);
        };

        fetchTask()

    }, [])

    const onSubmit = async (data) => {
        console.log("data", data)
        console.log("match.params", match.params)
        await updateTask(data, match.params.id)
        history.push('/')
    }

    return task ? 
        <div className="container">
            <div class="mt-3">
                <h3>Edit Task Item</h3>
            </div> 
            <TaskForm task={task} onSubmit={onSubmit} /> 
        </div>
        : <div>Loading...</div>
    
};