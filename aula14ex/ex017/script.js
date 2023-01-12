function calcular() {
    var txtnum = window.document.querySelector('input#txtnum');
    var num_number = Number(txtnum.value);
    var num_string = String(txtnum.value);
    var tabuada = window.document.querySelector('select#seltabuada');
      
    if(num_string.length == 0){
        window.alert('ERR0 Tente novamente!');
    }else{
        tabuada.innerHTML = '';
        for(var c = 0; c <= 10; c++){
            num_string = `${num_number} x ${c} = ${num_number * c}` ;
            tabuada.innerHTML += `<option value='tabuada'>${num_string}</option>`;
        }
    }   
}