import React from 'react';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'


function Topnav() {
    return (
        <>
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

        </>
    );
}

export default Topnav;