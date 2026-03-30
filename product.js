let products = [];
let id = 0;

function resetProducts(){
  products = [];
  id = 0;
}

function getProducts(){
  return products;
}

function addProduct(name, price){
  if(!name || !price) throw new Error("Faltan datos");

  if(products.find(item => item.name === name)){
    throw new Error("El producto ya existía");
  }

  const item = {name, price, id:id++};
  products.push(item);
  // return products;
}

function removeProduct(id){

  const product = products.find(item => item.id === id);

  if(!product) throw new Error("Error: producto no existente")

  products = products.filter(item => item.id !== id)

}


function getProduct(id){
  const product = products.find(item => item.id === id);
  if(!product) throw new Error("Error: producto no existente");

  return product;
}

function updateProduct(id, name, price){
  const product = products.find(item => item.id === id)

  if(!product) throw new Error("Error: producto no existente");

  if(name)
    product.name = name;
  if(price)
    product.price = price;
return product;


}

// Llamadas a las funciones
// addProduct("queso", 10);
// addProduct("tomate", 1);
// addProduct("café", 3);
// addProduct(33, 3);
// console.log(getProducts());

module.exports = {
  resetProducts,
  getProducts,
  addProduct,
  removeProduct,
  getProduct,
  updateProduct,
}