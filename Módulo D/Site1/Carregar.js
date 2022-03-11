function Carregar() {
    var msg = document.getElementById('msg');
    var jota = document.getElementById('imagens');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = (`Agora são ${hora} horas.`);
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        jota.src = 'manhared.png';
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        jota.src= 'tardered.png'
    } else {
        // BOA NOITE!
        jota.src= 'noitered.png';
    }
}

var nota = document.getElementById ('notas')
nota.src='manhared.png'