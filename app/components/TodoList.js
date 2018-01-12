import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import TodoListItem from './TodoListItem';

class TodoList extends React.PureComponent {
  render() {
    const todos = this.props.data.todos || [];

    return (
      <div>
        {todos.map(({ id }) => (
          <TodoListItem
            id={id}
            key={id}
          />
        ))}
      </div>
    );
  }
}

const query = gql`
query getAllTodoIds {
  todos {
    id
  }
}
`;

export default graphql(query)(TodoList);
