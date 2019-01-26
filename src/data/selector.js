// this is a file where we'll keep methods, that we using from `fetch` plugin
// it will save time for us later.

const { graphQL } = require('@groceristar/groceristar-fetch');

// departments

const getDepartments = () => {
  // const departments = graphQL.getDepartments();
  // @TODO pick one of this methods. First return id as Integer, second return it as `key`

  const departments = graphQL.getDepartmentsGraphQL();
  // const departments = graphQL.getDepartmentsGraphQLKey();
  return departments;
};


// grocery lists
const getGroceries = () => {
  const groceries = graphQL.getGroceryGraphQL();
  //const groceries = graphQL.getGroceryGraphQLKey();
//   const groceries = graphQL.getGroceryGraphQL();


  return groceries;
};


// ingredients
const getIngredients = () => {
  // in order to make debuging process more quickier. I'm limiting right now number of returning ingredients
  // @TODO address that later.
  const limit = true;
  const ingredients = graphQL. getIngredientsGraphQL(limit);
  //const ingredients = graphQL.getIngredientsGraphQL();
  //const ingredients = graphQL.getIngredientsGraphQLKey();
  return ingredients;
};

// users
const getUsers = () => {
  const users = graphQL.getUsersGraphQL();
  //const users = graphQL.getUsersGraphQLKey();
  return users;
};

// items

// I can't find methods for this in the fetch

// const getItems = () => {
//  const items = graphQL.getItems ();
//  return items;
// }

// favorites
const getFavorites = () => {
 const favorites = graphQL.getFavoritesGraphQL();
 return favorites;
}


// userGrocery


module.exports = {
  getDepartments,
  getGroceries,
  getIngredients,
  getUsers,
  getFavorites
};
