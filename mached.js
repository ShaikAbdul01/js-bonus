// let numbers=[34,235,46,234];
// for(let number of numbers){
//     console.log(number)
// }

const products = [
    {id: 1, name: 'xiami phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung Phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age Phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000},
    {id: 8, name: 'M1 chip not cheap LapTOP', price: 19000},
];

// for(let product of products){
//     console.log(product)
// }

function machedProduct(products,search){
    let mached=[];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            console.log(product)
            // mached.push(product);
        }
        // console.log(product)
    }
    // return mached;
}
console.log(machedProduct(products,'phone'))
