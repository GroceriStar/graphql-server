// this is a file where we'll keep methods, that we using from `fetch` plugin
// it will save time for us later.

const { groceristar } = require('@groceristar/groceristar-fetch');

// departments

const getDepartments = () => {
  // const departments = groceristar.getDepartments();
  // @TODO pick one of this methods. First return id as Integer, second return it as `key`

  const departments = groceristar.getDepartmentsGraphQL();
  // const departments = groceristar.getDepartmentsGraphQLKey();
  return departments;
};


// grocery lists
const getGroceries = () => {
  const groceries = groceristar.getGrocery();
  return groceries;
};


// ingredients
const getIngredients = () => {
  const ingredients = groceristar.getIngredients();
  return ingredients;
};

// users
const getUsers = () => {
  const users = groceristar.getUsers();
  return users;
};

// items

// I can't find methods for this in the fetch

// const getItems = () => {
//  const items = groceristar.getItems ();
//  return items;
// }

// favorites
// const getFavorites = () => {
//  const favorites = groceristar.getFavorites ();
//  return favorites;
// }


// userGrocery


module.exports = {
  getDepartments,
  getGroceries,
  getIngredients,
  getUsers,
};
