module.exports = `
  type Query {
    # get all todos
    todos(
      # get done or not done (Optional)
      done: Boolean
    ): [Todo]

    # get all users
    users: [User]
  }

  type Mutation {
    # add a new todo, name (Required), done (Optional)
    addTodo(name: String!, done: Boolean): Todo
    # mark a todo as done
    completeTodo(id: ID!): Todo
    # assign a todo to a user
    assignUserToTodo(todoId: ID!, userId: ID!): Todo

    # create a new user
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
