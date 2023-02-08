// const array=[23,34,4,5,23,5,34,65,67]
// function duplicate(array){
//     let duplicate=[];
//     for(let element of array){
//         if(duplicate.includes(element)==false){
//             duplicate.push(element)
//         }
//         // console.log(element)
//     }
//     return duplicate;
// }
// console.log(duplicate(array))

const names= ['shaik','abdul','ahad','abdul','alim','ahad']
let uniqe=[];
for (let i=0;i<names.length;i++){
    let name=names[i];
    if(uniqe.includes(name)==false){
        uniqe.push(name)
        console.log(name,uniqe)

    }
}