import React from 'react';

// Import components
import Navbar from './Navbar';

function Layout(props) {
  return (
    // React.Fragment funciona con un div vacio. Que regresa un elemento.
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
