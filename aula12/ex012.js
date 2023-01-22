var agora = new Date();
var hora = agora.getHours();
var segundos = agora.getSeconds();
var milisegundos = agora.getMilliseconds();
console.log(`Agora são exatamens ${hora} horas. e ${segundos} segundos e ${milisegundos} milisegundos`);

if(hora < 5) {
    console.log('Boa Madrugada!');
}else if(hora < 12){
    console.log('Bom Dia!');
}else if(hora < 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite!')
}