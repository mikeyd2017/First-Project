import React, { Component, Fragment } from 'react';
import './App.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import Routes from './Routes';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import ShopHome from './components/ShopHome';
import ShopSearch from './components/ShopSearch';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
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

  handleLogout = async event => {
      await Auth.signOut();

      this.userHasAuthenticated(false);
      this.props.history.push('/Login');
  };

  render() {
    const childProps = {
        isAuthenticated: this.state.isAuthenticated,
        userHasAuthenticated: this.userHasAuthenticated
    };

		return (
			<div className="App container">
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
              {this.state.isAuthenticated ? (
                <Link to="/ShopHome">Shop Home</Link>
              ) : (
                <Link to="/Login">Shop Home</Link>
              )}
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							{this.state.isAuthenticated ? (
								<NavItem onClick={this.handleLogout}>Logout</NavItem>
							) : (
								<Fragment>
									<LinkContainer to="/SignUp">
										<NavItem>Signup</NavItem>
									</LinkContainer>
									<LinkContainer to="/Login" defaultChecked="true">
										<NavItem>Login</NavItem>
									</LinkContainer>
								</Fragment>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes childProps={childProps} />
			</div>
		);
	}
}

export default withRouter(App);

/*class MainMenu extends Component {
  state = {
    openWindow: 'login'

  }

  handleHomeClick = () => {
    this.setState ({
      openWindow: 'home'
    })
  }

  handleShopClick = () => {
    this.setState ({
      openWindow: 'shop'
    })
  }

  handleAboutClick = () => {
    this.setState ({
      openWindow: 'about'
    })
  }

  handleAdminClick = () => {
    this.setState ({
      openWindow: 'admin'
    })
  }

    render () {
      return (
        <div>
        <div id="menulist" className="ui buttons">
          <button className="ui button" onClick={this.handleHomeClick}>Home</button>
          <button className="ui button" onClick={this.handleShopClick}>Shop</button>
          <button className="ui button" onClick={this.handleAboutClick}>About</button>
          <button className="ui button" onClick={this.handleAdminClick}>Admin</button>
        </div>
        <div className="Current-content">
        <CurrentContent
          openWindow={this.state.openWindow}
          onHomeClick={this.handleHomeClick}
          onShopClick={this.handleShopClick}
          onAboutClick={this.handleAboutClick}/>
        </div>
        </div>
      );
    }
}

class CurrentContent extends Component {
  render() {
    if(this.props.openWindow == 'home') {
    return (
      <div>
      <ShopHome/>
      </div>
    )
  } else if (this.props.openWindow == 'shop') {
    return (
      <div>
        <ShopSearch />
      </div>
    );
  } else if (this.props.openWindow == 'logout') {
    return (
    <div>
      <Logout />
    </div>
    );
  } else if (this.props.openWindow == 'admin') {
    return (
    <div>
      <Admin />
    </div>
    );
  } else if (this.props.openWindow == 'login') {
    return (
    <div>
      <Login />
    </div>
    ); }
  }
}*/
