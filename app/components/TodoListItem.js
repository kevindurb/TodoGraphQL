import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TodoListItem extends React.PureComponent {
  render() {
    const todo = this.props.data.todoById || {};

    return (
      <div>
        {todo.name}
      </div>
    );
  }
}

const query = gql`
query getSingleTodo($id: ID!) {
  todoById(id: $id) {
    name
  }
}
`;

const settings = {
  options: ({ id }) => ({
    variables: {
      id,
    },
  }),
};

export default graphql(query, settings)(TodoListItem);
