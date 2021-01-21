import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';

//Importing custom components
import Sidebar from './components/sidebar';
import Topnav from './components/topnav';
import Feednav from './components/feednav';
import Feed from './components/feed'


class App extends React.Component {
  componentDidMount(){
    // Sidebar Toggle Menu Click
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
     });
  }
  render() {
    return (
      <div className="MainDiv">
        <div class="d-flex" id="wrapper">
            <Sidebar/>

            <div id="page-content-wrapper">

              <Topnav/>
              <Feednav/>
              <Feed/>
              
            </div>
        </div>
      </div>
    );
  }
}
export default App;