module.exports = {
  Date(root) {
    const date = new Date(root);
    return date.toISOString()
  }
};
