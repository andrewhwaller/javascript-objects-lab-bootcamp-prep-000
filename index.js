var recipes = {}

function updateObjectWithKeyAndValue(recipes, prop, '1') {
  var prop2 = "2"
  return Object.assign({}, recipes, { [prop]: 1 })
  recipes.prop2 = '2'
  return recipes
}
