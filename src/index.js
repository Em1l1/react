import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

// const name = 'Platzi';
// const element = <h1>Hello, Platzi Badges!</h1>;
// const jsx = <h1>Hello, {name} Badges!</h1>
// const element = React.createElement('a', { href: 'https://platzi.com'}, `Ir a ${name}...`)

// const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
const container = document.getElementById('app');
ReactDOM.render(<Badge />, container);
