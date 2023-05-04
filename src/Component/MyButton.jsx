import React from 'react'
import { Button, DatePicker, Space, Tooltip, version } from "antd";
import 'antd/dist/reset.css';

const MyButton = () => {
  return (
    <>
      <Tooltip title="Ajouter une liste">
          <Button
              type="primary"
              shape="round"
              size="large"
              // className='btn btn-primary text-light m-1'
              onClick={() => console.log("Le bouton à été cliqué")}
          >
              Ajouter une liste
          </Button>
      </Tooltip>
      </>
  )
}

export default MyButton