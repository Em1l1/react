import React from 'react';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render () {
    return(
      <div>
        <a href="/">
          <img src={logo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    );
  }
}


  export default Navbar;
