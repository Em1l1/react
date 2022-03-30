// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
// //
// const container = document.getElementById('app');
// //
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Platzi';
// const element = <h1>Hello, Platzi Badges!</h1>;
// const jsx = <h1>Hello, {name} Badges!</h1>
const element = React.createElement('a', { href: 'https://platzi.com'}, `Ir a ${name}...`)

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
