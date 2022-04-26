import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
// import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');
ReactDOM.render(
  <BadgeNew />,
  // <Badge
  //
  //   firstName="Victor"
  //   lastName="Juarez"
  //   avatarUrl="https://www.gravatar.com/avatar?d=identicon"
  //   lobTitle="Dev Engineer"
  //   twitter="@victorgame_"
  // />, 
  container);
