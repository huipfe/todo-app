// Css & Logo
import './App.css';
import logo from './logo.png';

// React Effect & State
import { useEffect, useState } from 'react';

// Ant Design
import 'antd/dist/reset.css';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// Components
import MyButton from './Component/MyButton';
import ListModal from './Component/ListModal';
import ListCard from './Component/ListCard';
// Firebase
import Fire from './Fire';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const firebase = new Fire((error) => {
      if (error) {
        setError(error); 
      } else {
        firebase.getLists((lists) => {
          setLists(lists);
          setLoading(false);
        });
      }

    return function unsuscribe() {
        firebase.detach();
      }

    }); 
  }, []); 

  return (
    
    <div className="App">
      <header className="App-header" >
        <img alt="Todo-List" class="App-logo" src={logo}></img>
          <h1>Todo App</h1>
          <p>Bienvenue sur mon appli de gestion de liste</p>

        {error && <p className='text-danger'>{error.message}</p>}

      {loading ? <Spin /> : (
        <div className='d-flex flex-wrap'>
          {lists.map((list) => (
            // <div key={list.id}>
            //   <h2 style={{color:list.color}}>{list.name}</h2>
            //   <p style={{color:list.color}}>{list.color}</p>
            <ListCard key={list.id} list={list}/>
            // </div>
            ))}

              {/* {lists.tasks.map((task) => (
                <div key={task.id}>
                  <p>{task.name}</p>
                  <p>{task.description}</p>
                  <p>{task.date}</p>   
                  </div>
          ))}; */}
          </div>  
      )}

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
