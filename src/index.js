import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import './styles/app.scss';

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('API_KEY', process.env.APP_KEY);

ReactDOM.render(<App />, document.getElementById('app'));
