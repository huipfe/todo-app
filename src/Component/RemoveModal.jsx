import { Button, Modal  } from 'antd'
import Fire from '../Fire'
import { useState } from 'react'

const RemoveModal = (props) => {
    const [error, setError] = useState(null);

    function handleSubmit() {
        const firebase = new Fire((error) => {
            if (error) {
                setError(error);
            } else {
                firebase.deleteList(props.list);
                props.onClose();
            }
        });
    }

    return (
        <Modal
            title={props.title}
            visible={props.isVisible}
            onCancel={props.onClose}
            footer={[
                <>
            <Button  className="btn btn-light" onClick={props.onClose}>
                Annuler
            </Button>
            <Button className="btn btn-danger" onClick={handleSubmit}>
                Supprimer
            </Button>
                </>
            ]}
        >
            Êtes-vous sûr de vouloir supprimer cette liste ?  
            <span style={{ color: props.list.color }}> { props.list.name} ?</span>
        </Modal>
    )
}

export default RemoveModal