import './App.css';
import logo from './logo.png';

import { Button, DatePicker, Space, Tooltip, version } from "antd";
import 'antd/dist/reset.css';

import MyButton from './Component/MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <img alt="Todo-List" class="App-logo" src={logo}></img>
          <h1>Todo App</h1>
          <p>Bienvenue sur mon appli de gestion de liste</p>
        {/* <button type="button" className='btn btn-light text-dark m-3'>Button from Bootstrap</button>
        <Button type="" className='btn btn-light text-dark m-3'>Button from antd</Button> */}
        <MyButton />
      </header>
    </div>
  );
}
export default App;
