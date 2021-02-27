import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import SavedFav from "./SavedFav";
import Posts from "./Posts";
import About from "./SavedFav";
import Shop from "./Shop";
import Services from "./Services"
import { Button } from './Button';
 
class Main extends Component {
  render() {
    return (
      
        <HashRouter>
          <section className="container-banner">

            <a href=""><img id="profilepic" src="Images/prof1.png"  width="170" height="170" alt="profilepic"/></a>
            <h1 className="prof"> User Name </h1>
            <p>username@gmail.com</p>
            <p id="paragarph1"> Creator
            <br/>Designer</p>
            <br></br>
            <Button buttonStyle='btn--outline'>+ Fav</Button> <Button buttonStyle='btn--outline'>Send Message</Button>

          </section>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/savedFav">Saved Fav</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/savedFav" component={SavedFav}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/services" component={Services}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}

 
export default Main;