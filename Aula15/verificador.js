function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os Dados e Tente Novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-menino.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
                

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-menina.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}anos.`
        res.appendChild(img)
       
    }
}