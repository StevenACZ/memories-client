// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Redux - Reducers
import reducers from './reducers';

// Components
import App from './App.jsx';

const store = createStore(
	reducers,
	composeWithDevTools(compose(applyMiddleware(thunk)))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
