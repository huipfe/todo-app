import React from 'react'
import { Button, DatePicker, Space, Tooltip, version } from "antd";
import 'antd/dist/reset.css';

const MyButton = (props) => {
return (
    <>
    <Tooltip title={props.tooltip}>
        <Button
            className="m-2"
            type={props.type}
            shape={props.shape}
            size={props.size}
            onClick={props.onClick}
            icon={props.icon}
        >
        {props.children}
        </Button>
    </Tooltip>
    </>
)
}

export default MyButton