let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p = 0){
        console.log('Engordou!')
        this.peso += p;//O comando this pega um dos indices e traz para dentro da function
    }
}

amigo.engordar(2);
console.log(`${amigo.nome} estar pesando ${amigo.peso}`);