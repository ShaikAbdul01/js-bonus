const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 }
];
function shoppingCost(shoppingCart){
    let sum=0
    for(let element of shoppingCart){
        // console.log(element.price)
      sum+=element.price
    }
    return sum
}
console.log(shoppingCost(shoppingCart))