import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Review from './components/Review';
import review_array from './review_data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       	<Navbar/>
		<Splash/>
		<div className = "container">
			<div className="row">

			</div>
		</div>
      </div>
    );
  }
}

export default App;
