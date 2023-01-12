function contador() {
    var init = window.document.querySelector('input#init');
    var end = window.document.querySelector('input#end');
    var increment = window.document.querySelector('input#increment');
    var res = window.document.querySelector('p#res');

    var init_value = Number(init.value);
    var end_value = Number(end.value);
    var increment_value = Number(increment.value);

    if(init.value.length == 0 || end.value.length == 0 || increment.value.length == 0 ){
        window.alert('ERR0 Confira o formulário!');
    }else{
       var number = '';
       var contador = '';

        if(init_value < end_value){
            for(var c = init_value; c <= end_value; c += increment_value){
                number = String(c);
                contador += number + '👉';
                res.innerHTML = `Contando <br> ${contador} &#x1F3C1`;
           }
        }else{
            for(var c = init_value; c >= end_value; c -= increment_value){
                number = String(c);
                contador += '👉' + number;
                res.innerHTML = `Contando <br> ${contador}  👉&#x1F3C1`;
           }
        }
    }

}
