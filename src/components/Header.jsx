import React from 'react';
import { BrowserRouter, Route ,Routes ,Link} from 'react-router-dom';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
import NoteEx from "./NoteEx";


function Header(){
    return (<header>
        <BrowserRouter>
      <div>
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <p class="navbar-brand">Keeper App</p>
            </div>
              <ul class="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/note">Note</Link></li>
              </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/> 
          <Route  path="/about" element={<AboutPage/>}/>
          <Route  path="/note" element={<NoteEx/>}/>
          <Route  path="*" element={<ErrorPage/>}/> 
        </Routes>
        </div>
      </BrowserRouter>
    </header>);
}

export default Header;
