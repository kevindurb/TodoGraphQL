import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TodoListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChangeDone = this.onChangeDone.bind(this);
  }

  onChangeDone({ target }) {
    const todo = this.props.data.todoById || {};
    this.props.mutate({
      variables: {
        id: todo.id,
        done: true,
      },
    }).then(() => {
      this.props.data.refetch();
    });
  };

  render() {
    const todo = this.props.data.todoById || {};

    return (
      <div>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={this.onChangeDone}
        />
        {todo.name}
      </div>
    );
  }
}

// TODO: split into multiple queries
const query = gql`
query getSingleTodo($id: ID!) {
  todoById(id: $id) {
    id
    name
    done
  }
}

mutation setDone($id: ID!, $done: Boolean!) {
  completeTodo(id: $id) {
    id
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
