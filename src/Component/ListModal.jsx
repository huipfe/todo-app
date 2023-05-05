import React from 'react'
import { Modal } from "antd";
import ListForm from './ListForm';
import { useState } from 'react';


const ListModal = (props) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#3B97FF");

    return (
        <>
            <Modal 
            title={props.modalTitle} 
            visible={props.isModalOpen} 
            onCancel={props.handleCancel}>

            <ListForm name={name} color={color} setName={setName} setColor={setColor}/>

            </Modal>
        </>
    )
}

export default ListModal
