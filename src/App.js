import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <Router>
      <div className="app">
          <Navbar />
       
        <Link to="/about" className="aboutweb">About</Link>
        <Switch>

          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/about">
            <About></About>
          </Route>
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
    
  );
}

function About() {
  return <div className="team">
          <h2 className="nameteam">T.Cry Team</h2>
    <h3>Nguyễn Văn Châu - 4501104024</h3>
    <h3>Hồ Sỹ Chiến - 4501104027</h3>
    <h3>Nguyễn Minh Hiếu - 4501104083</h3>
    <h3>Lương Hoàng Quân 4501104192</h3>

  </div>;
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
