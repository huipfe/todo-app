import React from 'react'
import { Input } from "antd";

const ListForm = (props) => {

    // console.log(props.name, props.color)
    function handleChange(event) {
        switch (event.target.name) {
        case "name":
                props.setName(event.target.value);
            break; 
        case "color":
                props.setColor(event.target.value);
                break;
        default:
            break;
    }
}

return (
    <form>
        <label htmlFor="listName">Nom de la liste</label>
        <Input placeholder='Nom de la liste' onChange={handleChange} value= {props.name} name='name' id='name'/>
        <label htmlFor="color">Couleur</label>
        <Input type="color" name='color' id='color' onChange={handleChange} value={props.color} />
    </form>
        )  
}

export default ListForm