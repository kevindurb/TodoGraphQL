module.exports = `
  type Query {
    todos(done: Boolean): [Todo]
    users: [User]
  }

  type Mutation {
    addTodo(name: String!, done: Boolean): Todo
    completeTodo(id: ID!): Todo
    assignUserToTodo(todoId: ID!, userId: ID!): Todo

    addUser(name: String!): User
  }

  type Todo {
    id: ID
    name: String
    done: Boolean
    completedAt: Date
    assignedTo: User
  }

  type User {
    id: ID
    name: String
  }

  scalar Date
`;
