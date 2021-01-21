import React from 'react';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'

//Import custom stylesheet
import './sidebar.css';


function Sidebar() {
    return (
        <>
        <div class="bg-light border-right " id="sidebar-wrapper">
              {/* <div class="sidebar-heading"> </div> */}
              <div class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action bg-light">HOME</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">CATEGORIES</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">CREATIONS</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">JOBS</a>
                <a href="#" class="list-group-item list-group-item-action bg-light">MARKETPLACE</a>
                
              </div>
            </div>

        </>
    );
}

export default Sidebar;