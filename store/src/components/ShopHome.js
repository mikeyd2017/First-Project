import React, { Component } from 'react';
import './ShopHome.css';
import { Auth } from 'aws-amplify';
import Login from './Login';
import { Link, withRouter } from 'react-router-dom';

class ShopHome extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
}

  render() {
    return (
      <div>{this.props.isAuthenticated ? (
        <div className="ShopHome">
          <p>Hi</p>
        </div>
      ) : (
        <Login></Login>
      )}</div>
    )
  }
}

  export default ShopHome;