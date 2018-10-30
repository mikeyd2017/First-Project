import React, { Component } from 'react'
import './Cart.css';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: false,
          email: '',
          password: ''
        };
      }

    async componentDidMount() {
        try {
          if (await Auth.currentSession()) {
            this.userHasAuthenticated(true);
          }
        } catch (e) {
          if (e !== 'No current user') {
            this.props.history.push('/Login');
            alert(e);
          }
        }
    
        this.setState({ isAuthenticating: false });
      }
    
      userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
      };

    render() {
        return (
            <p>hi</p>
        )
    }
}

export default HomeScreen