import React from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from '../apolloClient';
import TodoList from './TodoList';

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <TodoList />
      </ApolloProvider>
    );
  }
}

export default App;
