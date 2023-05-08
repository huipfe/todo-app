import { Card, Checkbox } from 'antd'
import React from 'react'

const ListCard = (props) => {
    return (
        <Card
            title={
                <>
                <h2 style=
                {{color: props.list.color }}>
                {props.list.name}
                </h2>

                <p 
                className='fs-4'
                style=
                {{color: props.list.color }}>
                {props.list.color}
                </p>
                </>
            }
            
            style={{ width: 300 }}
            className='m-3'
        >
        {props.list.tasks.length <= 0 && (<p className='fs-6'>Aucune tâche pour le moment</p>)}
        {props.list.tasks.map((task) => (
            <div key={task.id}>
                <>
                <Checkbox>
                <p className='fs-5'>{task.title}</p>
                </Checkbox>
                </>
            </div>
        ))}
        </Card>
    );
}

export default ListCard