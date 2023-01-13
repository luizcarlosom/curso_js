let num = [5, 8, 2, 9, 3];

num.push(1);//Adiciona o valor 1 no fim do vetor
num.sort();//Coloca o vetor em ordem
let vetor_tam = num.length

console.log(`O vetor tem ${num.length} posições!`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

for(var i = 0; i < vetor_tam; i++ ){
    console.log(num[i]);
}