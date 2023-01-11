function verificar() {
    var data = new Date();
    var ano  = data.getFullYear();
    var nasc = window.document.querySelector('input#txtidade');
    var ano_nascimento = Number(nasc.value);
    var idade = ano - ano_nascimento; 
    var msg = window.document.querySelector('div#res');
    var fsex = window.document.getElementsByName('radsex');
    var genero = '';
    var img = window.document.createElement('img');
    img.setAttribute('id', 'foto');
    
    if(nasc.value.length == 0 || ano_nascimento > ano){
        window.alert('[ERR0] Verifique os dados e tente novamente!');
    }else{
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade < 15 && idade > 0) {
                msg.innerHTML = `Detectamos uma criança ${genero} com ${idade} anos!`
                img.setAttribute('src', '../public/crianca_h.jpg')
           }else if(idade < 20) {
                msg.innerHTML = `Detectamos um jovem ${genero} com ${idade} anos!`
                img.setAttribute('src', '../public/jovem_h.jpg')
           }else if(idade < 50) {
                msg.innerHTML = `Detectamos um adulto ${genero} com ${idade} anos!`
                img.setAttribute('src', '../public/adulto_h.jpg')
           }else{
                msg.innerHTML = `Detectamos um idoso ${genero} com ${idade} anos!`
                img.setAttribute('src', '../public/idoso_h.jpg')
           }
            
        }else{
            genero = 'Mulher'
            if(idade < 15 && idade > 0) {
                msg.innerHTML = `Detectamos uma criança ${genero} com ${idade} anos!`
                img.setAttribute('src', '../public/crianca_m.jpg')
           }else if(idade < 20) {
                msg.innerHTML = `Detectamos uma ${genero} jovem com ${idade} anos!`
                img.setAttribute('src', '../public/jovem_m.jpg')
           }else if(idade < 50) {
                msg.innerHTML = `Detectamos uma ${genero} adulta com ${idade} anos!`
                img.setAttribute('src', '../public/adulto_m.jpg')
           }else{
                msg.innerHTML = `Detectamos uma ${genero} idosa  com ${idade} anos!`
                img.setAttribute('src', '../public/idoso_m.jpg')
           }
        }
    }
    msg.appendChild(img);
}