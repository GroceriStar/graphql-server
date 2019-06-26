// this is a file where we'll keep methods, that we using from `fetch` plugin
// it will save time for us later.

// const { graphQL, gsLoopback, groceristar } = require('@groceristar/groceristar-fetch');
const { 
  usergrocery, ingredients, favorites, items, departments, grocery, users 
} = require('@groceristar/sd-wrapper')
//@groceristar/fgs-graphql
  
// departments

const getDepartments = () => {
  // const departments = graphQL.getDepartments();
  // @TODO pick one of this methods. First return id as Integer, second return it as `key`

  // const departments = graphQL.getDepartmentsGraphQL();
  // const departments = graphQL.getDepartmentsGraphQLKey();
  return departments;
};







// grocery lists
const getGroceries = () => {
  // const groceries = graphQL.getGroceryGraphQL();
  //const groceries = graphQL.getGroceryGraphQLKey();
//   const groceries = graphQL.getGroceryGraphQL();


  return grocery;
};





// ingredients
const getIngredients = () => {
  // in order to make debuging process more quickier. I'm limiting right now number of returning ingredients
  // @TODO address that later.
  const limit = true;
  // const ingredients = graphQL. getIngredientsGraphQL(limit);
  //const ingredients = graphQL.getIngredientsGraphQL();
  //const ingredients = graphQL.getIngredientsGraphQLKey();
  return ingredients;
};




// users
const getUsers = () => {
  // const users = graphQL.getUsersGraphQL();
  //const users = graphQL.getUsersGraphQLKey();
  return users;
};


const getItems = () => {
//  const items = graphQL.getItemsGraphQL();
 return items;
}




// favorites
const getFavorites = () => {
//  const favorites = graphQL.getFavoritesGraphQL();
 return favorites;
}




// userGrocery
const getUserGrocery = () => {
//  const usergrocery = graphQL.getUserGroceryGraphQL();
 return usergrocery;
}





//groceristar
function getGroceryByNameWithDepAndIngKey(name){
  // return groceristar.getGroceryByNameWithDepAndIngKey(name);
};

// GS Loopback
function getUltimateGrocery(){
  // return gsLoopback.getUltimateGrocery();
};

function getGLwithUserRelations(){
  // return gsLoopback.getGLwithUserRelations();
};

function getIngredientsSampleFromDB(){
  // return gsLoopback.getIngredientsSampleFromDB();
};





module.exports = {
  getDepartments,
  getGroceries,
  getIngredients,
  getUsers,
  getFavorites,
  getItems,
  getUserGrocery,

  getGroceryByNameWithDepAndIngKey,

  getUltimateGrocery,
  getGLwithUserRelations,
  getIngredientsSampleFromDB,
};
