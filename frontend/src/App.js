import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';

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
            <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="sidebar-heading"> </div>
              <div class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action bg-light">HOME</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">FAVS</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">POPULAR</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">NEW</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">CATEGORIES</a>
                
              </div>
            </div>

            <div id="page-content-wrapper">
              <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
                <button class="btn btn-primary  ml-2" id="logo-link">LOGO</button>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">NOTIFICATIONS <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">MESSAGES</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        PROFILE ICON
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">PROFILE NAME</a>
                        <a class="dropdown-item" href="#">SELLING</a>
                        <a class="dropdown-item" href="#">BUYING</a>
                        <a class="dropdown-item" href="#">WATCHLIST</a>
                        <a class="dropdown-item" href="#">BOOKMARKS</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">SETTINGS</a>
                        <a class="dropdown-item" href="#">HELP CENTER</a>
                        <a class="dropdown-item" href="#">LOG OUT</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>

              

              <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

                    <nav>
                          <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">CREATIONS</a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">FEED</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">JOBS</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">MARKETPLACE</a>
                          </div>
                        </nav>
                    </div>
              </nav>

              <div class="container-fluid">
                <h1 class="mt-4">HOME</h1>
                <p>
                  POSTS WILL APPEAR HERE
                </p>
                
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default App;