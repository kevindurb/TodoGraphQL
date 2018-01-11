module.exports = `
  type Query {
    todos(done: Boolean): [Todo]
  }

  type Mutation {
    addTodo(name: String!, done: Boolean): Todo
    completeTodo(id: ID!): Todo
  }

  type Todo {
    id: ID
    name: String
    done: Boolean
    completedAt: Date
  }

  scalar Date
`;
