import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export const TaskForm = ({ task, onSubmit }) => {
    
    const { register, handleSubmit } = useForm({
        defaultValues: {
            text: task ? task.text : "",
            description: task ? task.description : ""
        }
    })
    const history = useHistory()


    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
        //history.push("/")
    })

    return (
       
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input className="form-control" ref={register} type="text" name="text" id="text" />
                
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" ref={register} type="text" name="description" id="description" />   
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save Task
                </button>
            </div>
        </form>
        
    )
};