import React, {useState} from 'react';
import axios from 'axios';

function CreateWilder() {
    const url = "http://localhost:5000/api/wilders/create";
    
    const [wilder, setWilder] = useState({
        name: "",
        city: "",
        title: "",
    })

    const createWilder = e => {
        e.preventDefault();
        axios.post(url , {
            name: wilder.name,
            city: wilder.city,
            skills: [
                {title: wilder.title, "votes" : 0}
            ]
        })
    }
    function handleInputChange(e){
        const newWilder = {...wilder}
        newWilder[e.target.id] = e.target.value
        setWilder(newWilder)
    }
  return (
    <div>
        <h2>Add Wilder</h2>
        <form onSubmit={createWilder}>
            <label>Wilder name</label>
            <input id="name" onChange={(e) => handleInputChange(e)} value={wilder.name}></input>
            <label>Wilder city</label>
            <input id="city" onChange={(e) => handleInputChange(e)} value={wilder.city}></input>
            <label>Wilder skill(s)</label>
            <input id="title" onChange={(e) => handleInputChange(e)} value={wilder.title}></input>
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default CreateWilder;