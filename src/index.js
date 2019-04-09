import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import './styles/Global.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
