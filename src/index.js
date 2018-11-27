import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient();

ReactDOM.render( 
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root')
)