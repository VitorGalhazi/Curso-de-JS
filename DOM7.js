var agora = new Date()
var horas = agora.getHours()
console.log ('Agora são exatamente ' + horas + (' horas.'))
if (horas >= 12 && horas < 18){
    console.log ('Boa tarde!')
} else if (horas >= 6 && horas < 12){
    console.log ('Bom dia!')
} else {
    console.log ('Boa noite!')
}