var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  var recipes = { prop: 1 }
  return Object.assign({}, recipes, { [prop]: 1 })
  recipes.prop2 = '2'
  return recipes
}
