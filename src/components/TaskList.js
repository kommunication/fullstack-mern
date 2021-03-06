import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getTasks } from '../api'

export const TaskList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const tasks = await getTasks()
            setItems(tasks)
        }
        
        fetchItems()
    }, [])
    return (
        <div className="container">
            <div className="mt-3">
                <h3>Assignments</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map( task => (
                                <tr key={task._id}>
                                    <td>
                                        {task.text}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${task._id}`}>Edit</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div> 
        </div>
    )
}