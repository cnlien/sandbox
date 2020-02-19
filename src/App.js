import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss';

import Dashboard from './components/Dashboard/Dashboard.js'

function App() {
  const viewHeight = window.innerHeight;

  return (
    <div className="App" style={{height: viewHeight}}>
      <Dashboard />
    </div>
  );
}

export default App;
