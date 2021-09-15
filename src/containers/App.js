import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
 const [robots, setRobots] = useState([])
 const [searchfield, setSearchfield] = useState('')
 
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setRobots(users)}); 
}, []) 

const onSearchChange = (event) => {
  setSearchfield(event.target.value)
}
    
const filteredRobots = robots.filter(robot =>{
  return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Welcome to cat icons!</h1>
          <SearchBox searchChange={onSearchChange}/>
          <CardList robots={filteredRobots} />
        </div>
      );
  }


export default App;