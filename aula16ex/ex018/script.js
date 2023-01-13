let lista = [];
let select = window.document.querySelector('select#tabelaDeNumeros');
let maior_valor = 0;
let menor_valor = 1000;
let soma_valores = 0;
let res = window.document.querySelector('div#res');

function adicionar(){
    let txtnum = window.document.querySelector('input#txtnum');
    let num = Number(txtnum.value);
      
    res.innerHTML = '';
        
    if(txtnum.value.length == 0){
        window.alert('ERR0 Tente Novamente!');
    }else if(num > 100 || num < 1){
        window.alert('ERR0 Digite Um Número Entre 1 e 100!')
    }else if(lista.indexOf(num) == -1){
        var dados = window.document.createElement('option');
        dados.text = `O valor ${num} foi adicionado`;
        select.appendChild(dados);
        lista.push(num);
        soma_valores += num;
        if(num > maior_valor){
            maior_valor = num;
        }
        if(num < menor_valor){
            menor_valor = num;
        }
        txtnum.value = '';
        txtnum.focus();
    }else{
        window.alert('O número já foi adicionado!')
    }  
}

function finalizar(){
   if(lista.length == 0){
        window.alert('ERR0 Digite algum número antes de finalizar!')
   }else{
        res.innerHTML = `<p>Ao todo temos ${lista.length} números.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior_valor}.</p>` ;
        res.innerHTML += `<p>O menor valor informado foi ${menor_valor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma_valores}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${soma_valores / lista.length}.</p>`
   }    
}