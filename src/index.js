import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App';
import './index.css';
import reducers from './appState';

const devToolsExtension = () => window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devToolsExtension());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('root')
);
