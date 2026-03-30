const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product.js');

beforeEach(() => {
  resetProducts();
});

afterEach(() => {
  resetProducts();
});

describe('Adding products', () => {
  // Si alguno de los dos parámetros no está
  // definido, la función lanzará un error
  it("Succesfully product added if you pass 2 parameters", () => {
    expect(() => addProduct("queso", 2)).not.toThrow();
    expect(getProducts()).toEqual([{name: "queso", price:2, id:0}]);
  });
  
  it("Should throw an error if you don't send 1st parameter", () => {
    expect(() => addProduct(null, "queso")).toThrow();
  });

  it("Should throw an error if you don't send 2nd parameter", () => {
    expect(() => addProduct("queso", null)).toThrow();
  })

  it("Should throw an error if you don't send 2 parameters", () => {
    expect(() => addProduct("queso", null)).toThrow();
    expect(() => addProduct(null, null)).toThrow();
    expect(() => addProduct(null, 3)).toThrow();
  })


  it("Should fail if you add a repeated product", () => {

    addProduct("queso", 2); // añade 
    // repite añadido
    expect(() => addProduct("queso", 2)).toThrow();

  })
});

describe('Remove products', () => {

  it("Should remove a product", () => {

    addProduct("queso", 2);
    expect(getProducts()).toEqual([{ name:"queso", price: 2, id:0 }]);

    expect(() => removeProduct(0)).not.toThrow();

    expect(getProducts()).toEqual([]);

  });

  it("Shouldn't remove a product that doesn't exist", () => {
  
    expect(() => removeProduct(25)).toThrow();

  })
})

describe("Get a single product", () => {

  it("Should get a single product", () => {

    addProduct("queso", 2);
    expect(getProducts()).toEqual([{ name: "queso", price: 2, id:0 }])

    expect(() => getProduct(0)).not.toThrow();
  });

  it("Shouldn't get a single product that doesn`t exist", () => {
    expect(() => removeProduct(25)).toThrow();
  });

})


describe("Update a single product", () => {

  it("Should update a single product", () => {

    addProduct("queso", 2);
    expect(getProducts()).toEqual([{ name: "queso", price: 2, id:0 }])

    expect(() => updateProduct(0, "zumo", 22)).not.toThrow();

    expect(getProduct(0)).toEqual({ name: "zumo", price:22, id:0 })
  });

  it("Shouldn't get a single product that doesn't exist", () => {
    expect(() => updateProduct(25)).toThrow();
  });

  it("Should only update the price", () => {
    addProduct("queso", 2);
    expect(getProducts()).toEqual([{ name: "queso", price:2, id:0 }]);

    expect(()=> updateProduct(0, null, 22)).not.toThrow();

    expect(getProduct(0)).toEqual({ name: "queso", price: 22, id: 0})
  });

  it("Should only update the name", () => {
    addProduct("queso", 2);
    expect(getProducts()).toEqual([{ name: "queso", price:2, id:0 }]);

    expect(() => updateProduct(0, "tortilla", null)).not.toThrow();

    expect(getProduct(0)).toEqual({ name: "tortilla", price: 2, id:0 });
  });
});

