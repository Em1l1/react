import React from 'react';
import { Link } from 'react-router-dom';

// import './styles/Error.css'
import errorNotFound from '../images/404.jpg'
// import errorNotFound from '../images/4044.jpg'

function NotFound() {
  return <img src={errorNotFound}/>
  // return (
  //   <React.Fragment>
  //     <div className="NotFound">
  //       <Link className="btn btn-primary" to="/home">Home</Link>
  //     </div>
  //   </React.Fragment>
  // )
}

export default NotFound;
