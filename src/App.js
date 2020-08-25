import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return(
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>



      <p>Learning sometime so tough </p>


      </header>
     </div>  
    
  )
}
//main above  ---->




function Counter(){

  const[count,setCount]=useState(0);
  const handleIncrease=()=>setCount(count+1);

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
    const[users,setUsers]=useState([]);
    useEffect(()=>{ 

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(p=>p.json())
      .then(l=>setUsers(l));

    },[])

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
