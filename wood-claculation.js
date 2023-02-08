/*
chair ---> 3cft
table --> 10cft
bed --> 50cft
*/
function woodCalculation(chairQuntity,tableQuntity,bedQuntity){
    const chairWood=3;
    const tableWood=10;
    const bedWood=50;
    let chairTotal=chairQuntity*chairWood;
    console.log('Chair Wood: ',chairTotal +' cft')
    let tableTotal=tableQuntity*tableWood;
    console.log('table Wood: ',tableTotal +' cft')
    let bedTotal=bedQuntity*bedWood;
    console.log('Bed Wood: ',bedTotal +' cft')

    let totalWood= chairTotal + tableTotal + bedTotal;
    // console.log('Total Wood: ',totalWood +' cft')
    return totalWood ;
}
const chair=2;
const table=2;
const bed=5;
const totalWood=woodCalculation(chair,table,bed);
console.log('Total Wood: ',totalWood +' cft')