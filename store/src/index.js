import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import config from './config'
import Amplify from 'aws-amplify';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

Amplify.configure({
	Auth: {
		mandatorySignIn: false,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	API: {
		endpoints: [
			{
				name: 'testApiCall',
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);
registerServiceWorker();
