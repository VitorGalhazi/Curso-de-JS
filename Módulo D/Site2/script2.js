function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if  (Number(fano.value) == 0 ||  Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else  {
        let fsex = document.getElementsByClassName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
            if(fsex[0].checked){
                genero = 'homem'
            } else if (fsex[1].checked){
                genero = 'mulher'
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        }
    }