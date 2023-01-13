function parimp(n) {
    if(n % 2 == 0){
        return `O número ${n} é par`;
    }else{
        return `O número ${n} é impar`;
    }
}

let res = parimp(9);
console.log(res);

console.log(parimp(14))