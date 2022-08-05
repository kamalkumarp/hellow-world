import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/Greeting';
import SongList from './components/songs/SongList';

function App() {
  return <div>
   <Greeting  name="Kamal" age = "21" />
   <SongList />
  
  </div>
}

export default App;
