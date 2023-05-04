import React from 'react'
import { Button, DatePicker, Space, Tooltip, version } from "antd";
import 'antd/dist/reset.css';

const MyButton = (props) => {
return (
    <>
    <Tooltip title={props.tooltip}>
        <Button
            type="primary"
            shape="round"
            size="large"
            // className='btn btn-primary text-light m-1'
            onClick={props.onClick}
        >
        {props.children}
        </Button>
    </Tooltip>
    </>
)
}

export default MyButton