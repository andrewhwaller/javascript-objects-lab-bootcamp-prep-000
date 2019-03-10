var recipes = { prop: 1 }

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [prop]: 1 })
  recipes.prop2 = '2'
  return recipes
}
