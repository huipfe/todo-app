import './App.css';
import logo from './logo.png';

import { useState } from 'react';

import { Button, DatePicker, Space, Tooltip, version } from "antd";
import 'antd/dist/reset.css';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import MyButton from './Component/MyButton';
import ListModal from './Component/ListModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <div className="App">
      <header className="App-header" >
        <img alt="Todo-List" class="App-logo" src={logo}></img>
          <h1>Todo App</h1>
          <p>Bienvenue sur mon appli de gestion de liste</p>
      <MyButton 
      type="primary"
      shape="round"
      // color={color}
      size="large"
      tooltip="Ajouter une liste"
      // onClick={() => setIsModalVisible(true)}
          onClick={() => setIsModalOpen(true)}
      icon={<PlusOutlined /> }
      >
      Ajouter une Liste
      </MyButton> 

        <MyButton
          type="primary"
          shape="round"
          size="large"
          tooltip="Supprimer une liste"
          onClick={() => console.log("Supprimer une liste")}
          icon={<DeleteOutlined />}
        >
          Supprimer une Liste
        </MyButton> 

        <ListModal modalTitle="Ajouter une liste" isModalOpen={isModalOpen} handleCancel={() => setIsModalOpen(false)} />
      </header>
    </div>
  );
}
export default App;
