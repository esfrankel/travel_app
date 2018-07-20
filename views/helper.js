Handlebars.registerHelper('totalCost', function(array) {

  var totalCost = 0;
  for(let i = 0; i < array.length; i++) {
    totalCost += array[i].price;
  }
  return totalCost;
});
