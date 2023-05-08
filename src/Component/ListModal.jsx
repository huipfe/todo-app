import { Modal, Button } from "antd";
import ListForm from './ListForm';
import { useState } from 'react';
import Fire from '../Fire';

const ListModal = (props) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#3B97FF");
    const [error, setError] = useState([]);

    function handleSubmit() {
        const firebase = new Fire ((error) => { 
            if (error) {
                setError(error);
            }else {
                const list = {
                    "name": name,
                    "color": color,
                    "tasks": [],
                }

                firebase.addList(list);
            }
        });
        props.handleCancel();
    }

    return (
        <>
            <Modal
                title={props.modalTitle}
                visible={props.isModalOpen}
                onCancel={props.handleCancel}
                footer={[
                    <Button key="create" type="primary" onClick={handleSubmit}>
                        Créer
                    </Button>
                ]}
            >

            {error && <p>{error}</p>}
            <ListForm name={name} color={color} setName={setName} setColor={setColor}/>

            </Modal>
        </>
    )
}

export default ListModal
