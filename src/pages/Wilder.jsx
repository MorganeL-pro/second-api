import WilderCard from "../components/WilderCard";
import CreateWilder from "../components/CreateWilder";
import axios from 'axios';
import {useState, useEffect} from 'react';

function Wilder() {
const [wilders, setWilders] = useState([]);
const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchData = async () => {
    try {
      const {data} = await axios
      .get('http://localhost:5000/api/wilders');
      setWilders(data.result);
      setLoading(false);
    }
    catch(error){
      console.error(error);
    }
  }
  fetchData()
}, [])
  return (
    <>
    {loading ? (
      <p> Loading </p>
    ) : (
      <>
    <div>
      {wilders.map((wilder) => (
        <div key={wilder._id}>
        <WilderCard wilder={wilder}/>
        </div>
      ))}
    </div>
    <CreateWilder />
    </>
    )
}
    </>
  )
}

export default Wilder;