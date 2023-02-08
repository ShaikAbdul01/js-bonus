function multiply(n){
    if(n == 1){
        return 1;
    }
    return n * multiply(n-1);
}
const result=multiply(5)
console.log(result);
