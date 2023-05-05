import React from 'react'
import { Modal } from "antd";

const ListModal = (props) => {
    return (
        <>
            <Modal title={props.modalTitle} visible={props.isModalOpen} onCancel={props.handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default ListModal
