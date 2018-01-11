module.exports = `
  type Query {
    todos: [Todo]
  }

  type Todo {
    id: String
    name: String
  }
`;
