import React from 'react';
import '../styles/App.css';
import ParkList from './ParkList'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
        <NavBar />
        <ParkList />
    </div>
  );
}

export default App;
