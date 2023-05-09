import { Card, Checkbox } from 'antd'
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import React from 'react'
import IconButton from './IconButton';

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
        <div className='d-flex justify-content-between'>

            <IconButton 
                tooltip='Modifier la liste'
                    type='link'
                    icon={<EditOutlined className='btn btn-warning text-light fs-5 cursor-pointer' />}
                    onClick={() => {
                        props.setIsModalOpen(true)
                        props.selectedList(props.list)
                    }}
            />

            <IconButton
                tooltip='Ajouter une tâche'
                type='link'
                    icon={<PlusCircleOutlined className='btn btn-success fs-5 cursor-pointer' />}
                onClick={() => console.log('Ajouter une tâche')}
            />

            <IconButton
                tooltip='Supprimer la liste'
                    type='link'
                    icon={<DeleteOutlined className='btn btn-danger fs-5 cursor-pointer'/>}
                onClick={() => console.log('Supprimer la liste')}
            />
        </div>
        </Card>
    );
}

export default ListCard