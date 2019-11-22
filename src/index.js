import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterComponent from "./RouterComponent";
import { createStore } from 'redux'
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
ReactDOM.render(<Provider store={store}><RouterComponent/> </Provider>, document.getElementById('root'));
