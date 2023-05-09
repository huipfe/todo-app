import { Input } from 'antd';
import React from 'react'


const TaskForm = (props) => {
    function handleChange(event) {
                props.setTitle(event.target.value);
    }

    return (
        <form>
            <label htmlFor="title">Nom de la tâche</label>
            <Input placeholder='Nom de la liste' onChange={handleChange} value={props.title} name='title' id='title' />
        </form> 
    )
}

export default TaskForm