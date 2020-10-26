function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
//var data = new Date()
//var hora = data.getHours()
var hora = '23'
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    img.src = 'FotoManha.png'
    document.body.style.background = '#F4DDB9'
}else if (hora >= 12 && hora < 18){
    img.src = 'FotoTarde.png'
    document.body.style.background = '#ffa500'
}else {
    img.src = 'FotoNoite.png'
    document.body.style.background = '#474a51'
}

}
