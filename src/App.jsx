import './App.css';
import logo from './logo.png';

import { useState } from 'react';

import { Button, DatePicker, Space, Tooltip, version } from "antd";
import 'antd/dist/reset.css';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import MyButton from './Component/MyButton';

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div className="App">
      <header className="App-header" >
        <img alt="Todo-List" class="App-logo" src={logo}></img>
          <h1>Todo App</h1>
          <p>Bienvenue sur mon appli de gestion de liste</p>
      <MyButton 
      type="primary"
      shape="round"
      color={color}
      size="large"
      tooltip="Ajouter une liste"
      onClick={() => setColor("red")}
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
      </header>
    </div>
  );
}
export default App;
