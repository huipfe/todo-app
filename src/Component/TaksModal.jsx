import { Modal, Button } from "antd";
import { useState } from 'react';
import TaskForm from "./TaskForm";
import Fire from "../Fire";


const TaksModal = (props) => {
    const [title, setTitle] = useState(props.title ? props.title.name : "");
    const [error, setError] = useState(null);

    function handleSubmit() {
        const firebase = new Fire((error) => {
            if (error) {
                setError(error);
            } else {
                const newTask = {
                    "title": title,
                    "completed": false
                }
                const list = {
                    ...props.list,
                    'tasks': [...props.list.tasks, newTask]
                }
                firebase.updateList(list);
                props.onClose();
            }
        });
    }

    return (
            <>
            <Modal
                title={props.modalTitle}
                visible={props.isVisible}
                onCancel={props.onClose}
                footer={[
                    <>
                    <Button className="btn btn-success" onClick={handleSubmit}>
                        Créer
                    </Button>
                        <Button className="btn btn-danger" onClick={props.onClose}>
                        Annuler
                    </Button>
                    </>
                ]}
            >

                {error && <p className='text-danger'>{error.message}</p>}
                <TaskForm title={title} setTitle={setTitle} />
            </Modal>
            </>
    )
}

export default TaksModal