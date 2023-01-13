let valores = [8, 1, 7, 4, 2, 9];

valores.push(3)
valores.sort();

let buscar_vetor = valores.indexOf(3);

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

if(buscar_vetor == -1) {
    console.log('Não existe esse valor no vetor!')
}else {
    console.log(`O vetor está na posição ${buscar_vetor}`);
}
