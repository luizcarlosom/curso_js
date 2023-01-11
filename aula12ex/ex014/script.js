function carregar() {
    var agora = new Date();
    var hora =  agora.getHours();
    var min = agora.getMinutes(); 
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#foto')
    
    if(hora < 5){
        msg.innerHTML = `Agora são ${hora} horas e ${min}min. <br>Boa Madrugada, Luiz!`     
    }else if(hora < 12){
        msg.innerHTML = `Agora são ${hora} horas e ${min}min. <br>Bom Dia, Luiz!`
        img.src = '../public/manha.jpg'
        document.body.style.background = 'yellow' 
    }else if(hora < 18){
        msg.innerHTML = `Agora são ${hora} horas e ${min}min. <br>Boa Tarde, Luiz!`
        img.src = '../public/tarde.jpg' 
        document.body.style.background = 'orange'
    }else{
        msg.innerHTML = `Agora são ${hora} horas e ${min}min. <br>Boa Noite, Luiz!`
        img.src = '../public/noite.jpg'
        DocumentTimeline.body.style.background = 'navy'
}
}