function findProductPrice(products, name) {
  // Your code here
  let left = 0
  let rigth = products.length - 1;

  while (left <= rigth) {
    let mid = Math.floor((left + rigth) / 2)
    if (products[mid].name === name) {
      return products[mid].price    
    } else if (products[mid].name < name){
      left = mid + 1
    } else {
      rigth = mid - 1
    }
  }
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
