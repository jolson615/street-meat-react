import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import ReviewCard from './components/ReviewCard';
import reviews from './review_data';
import './App.css';

class App extends Component {
  render() {
    let userTestimonial = `"We Eat Street Meat is the best food review site that has ever been built. Now I can eat my street meat with confidence I can sit through my afternoon meetings."`
    return (
      <div className="App">
       	<Navbar/>
		    <Splash />
    		<div className = "container">
    			<div className="row">

          </div>
    		</div>
    </div>
    );
  }
}

export default App;
