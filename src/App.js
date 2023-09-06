import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import 'tachyons';
// import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Component } from 'react';
import axios from 'axios';
import Scroll from './Scroll';

function App() {

  // constructor(){
  //   super()
  //   this.state={
  //     robots: robots,
  //     searchfield: ''
  //   }
  // }
  // const [robots, setRobots]=useState(robots);
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response=> response.json())
  //   .then(users=> {this.setState({robots: users})});
  // }
  const [searchfield, setSearchfield]=useState('');
  const [robots, setRobots]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setRobots(response.data);
    })
    .catch((error)=>{
      console.error('Error fetching data:', error);
    })
  },[]); // Empty array as the second argument to ensure this effect runs once when the component mounts

  const onSearchChange=(event)=>{
    setSearchfield(event.target.value);
  }
  // render(){
  //   const filteredRobots=this.state.robots.filter(robots=>{
  //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  //   })

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return(
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
      <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  )
  };


export default App;
