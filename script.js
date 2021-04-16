// Cartas era da República 
// Jedis/heróis
var anakin = {
    nome: "Anakin Skywalker",
    imagem: "https://i.redd.it/hhytdrtxo4x41.jpg",
    atributos: {
        ataque: 10,
        defesa: 10,
        midichlorian: 10
    }
}
var kenobi = {
    nome: "Obi-wan Kenobi",
    imagem: "https://quartaparede.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/08/30204924/obi-wan-kenobi-1-752x439.jpg",
    atributos: {
        ataque: 6,
        defesa: 9,
        midichlorian: 8
    }
}
var yoda = {
    nome: "Mestre Yoda",
    imagem: "https://files.nsctotal.com.br/s3fs-public/styles/itapema_blog_post_header/public/2020-09/MY768.jpg?Ft33mWQkksC61vkcb7U3IinWYk3GHcb8&itok=4wcKeR4i",
    atributos: {
        ataque: 8,
        defesa: 5,
        midichlorian: 9
    }
}
var jinn = {
    nome: "Qui-Gon Jinn",
    imagem: "https://i.pinimg.com/736x/db/a6/a1/dba6a196220f2f6a4cbc17cfd4aec6ac.jpg",
    atributos: {
        ataque: 8,
        defesa: 6,
        midichlorian: 7
    }
}
var ahsoka = {
    nome: "Ahsoka Tano",
    imagem: "https://wpobservatoriodeseries.elav.tmp.br/wp-content/uploads/2020/05/Observat%C3%B3rio-de-S%C3%A9ries-2-2.jpg",
    atributos: {
        ataque: 8,
        defesa: 7,
        midichlorian: 6
    }
}
var windu = {
    nome: "Mace Windu",
    imagem: "http://centralhqs.com/wp-content/uploads/2017/05/capa-mace.png",
    atributos: {
        ataque: 9,
        defesa: 7,
        midichlorian: 7
    }
}

//Siths/vilões
var sidious = {
    nome: "Darth Sidious",
    imagem: "http://pm1.narvii.com/7242/c6f146a86a19c055e551ceb35a82be4df3ee8ae4r1-609-801v2_00.jpg",
    atributos: {
        ataque: 9,
        defesa: 4,
        midichlorian: 10
    }
}
var maul = {
    nome: "Darth Maul",
    imagem: "https://images.alphacoders.com/540/thumb-1920-540093.jpg",
    atributos: {
        ataque: 8,
        defesa: 7,
        midichlorian: 7
    }
}
var dooku = {
    nome: "Conde Dookan",
    imagem: "https://media.contentapi.ea.com/content/dam/walrus/common/count-dooku-releases-on-january-23.jpg.adapt.320w.jpg",
    atributos: {
        ataque: 9,
        defesa: 5,
        midichlorian: 8
    }
}
var grievous = {
    nome: "General Grievous",
    imagem: "https://popculturebanditcom.files.wordpress.com/2019/10/sw-general-grievous-1a.jpg?w=640",
    atributos: {
        ataque: 9,
        defesa: 5,
        midichlorian: 3
    }
}
var ventress = {
    nome: "Asajj Ventress",
    imagem: "https://mir-s3-cdn-cf.behance.net/projects/404/b7505a113606983.Y3JvcCwxMzgwLDEwODAsNjEsMA.jpg",
    atributos: {
        ataque: 7,
        defesa: 6,
        midichlorian: 6
    }
}
var savage = {
    nome: "Savage Opress",
    imagem: "https://i.pinimg.com/564x/49/82/e6/4982e6157876ca6d058cdd52809ce2ef.jpg",
    atributos: {
        ataque: 8,
        defesa: 5,
        midichlorian: 6
    }
}

var baralho = [yoda, dooku, anakin, sidious]
var cartaJogador
var cartaMaquina

var pontosJogador = 0
var pontosMaquina = 0

atualizarPlacar()
atualizarQuantidadeCartas()

document.getElementById('btnProximaRodada').style.display = "none"

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * baralho.length)
    cartaMaquina = baralho[numeroCartaMaquina]
    baralho.splice(numeroCartaMaquina, 1)

    let numeroCartaJogador = parseInt(Math.random() * baralho.length)
    cartaJogador = baralho[numeroCartaJogador]
    baralho.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').style.display = "none"

    playSoundEffect('soundeffects/saberOn.mp3')

    let text = "Escolha seu atributo:"
    document.getElementById('title-atribute').innerText = text

    exibirCarta('carta-jogador', cartaJogador)
}

function exibirCarta(elementId, cartaEscolhida) {
    var carta = document.getElementById(elementId)

    let nome = `<header>${cartaEscolhida.nome}</header>`
    let imagem = `<img class="photo" src='${cartaEscolhida.imagem}'>`

    let moldura = '<div class="size-card"> <section> <div class="supertrunfo-face"> ' + nome + ' <div class="profile-box"> <div style="display:flex;justify-content:center;align-items:center;">' + imagem + '</div>'

    var opcoesAtributos = ""
    for (var atributo in cartaEscolhida.atributos) {
        if (carta.id == 'carta-jogador') {
            console.log(atributo)
            opcoesAtributos += "<button type='button' class='btnChoice' id='" + atributo + "' name='atributo' onClick='jogar(" + atributo + ")'> " + atributo + " " + cartaEscolhida.atributos[atributo] + " </button>"
        } else {
            opcoesAtributos += "<p type='text' name='atributo' class='machine-layout' value='" + atributo + "'>" + atributo + "  " + cartaEscolhida.atributos[atributo]
        }
    }
    var closingTags = "</div> </div> </section> </div>"

    carta.className += " card_animation"
    carta.innerHTML = moldura + opcoesAtributos + closingTags

    document.getElementById('versus').style.display = "block";
}

function jogar(buttonId) {
    var divResultado = document.getElementById('resultado')
    let atrSelected = buttonId.id

    disableButtons()

    if (cartaJogador.atributos[atrSelected] > cartaMaquina.atributos[atrSelected]) {
        //TODO criar animação entre as cartas para simbolizar que ganhou ou não.
        htmlResultado = '<p class="resultado-final"> Vitória! </p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atrSelected] < cartaMaquina.atributos[atrSelected]) {
        htmlResultado = '<p class="resultado-final">Derrota... </p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empate.</p>'
    }

    if (baralho.length == 0) {
        alert("Fim de jogo")

        // TODO 12/04/2021 CRIAR POP-UP ESTILIZADO MOSTRANDO UM BUTTON DE JOGAR NOVAMENTE E CONTINUAR, 
        // TODO 12/04/2021 DEVE MOSTRAR NO TÍTULO O RESULTADO DO JOGO (VITORA/DERROTA) E TOCAR MÚSICA TEMA.  

        if (pontosJogador > pontosMaquina) {
            playSoundEffect('soundeffects/win_theme.mp3')
            htmlResultado = '<p class="resultado-final"> VITÓRIA !</p>'
        } else if (pontosJogador < pontosMaquina) {
            playSoundEffect('soundeffects/defeat_theme.mp3')
            htmlResultado = '<p class="resultado-final"> DERROTA... </p>'
        } else {
            playSoundEffect('soundeffects/draw_theme.mp3')
            htmlResultado = '<p class="resultado-final"> EMPATE. </p>'
        }
        document.getElementById('btnProximaRodada').style.display = "none"
    } else {
        document.getElementById('btnProximaRodada').style.display = "inline"
    }
    divResultado.innerHTML = htmlResultado

    playSoundEffect('soundeffects/saberOn.mp3')
    exibirCarta('carta-maquina', cartaMaquina)
    atualizarPlacar()
}

function atualizarPlacar() {
    let html = "jogador " + pontosJogador + " x " + pontosMaquina + " Maquina "
    var divPlacar = document.getElementById('placar').innerHTML = html
}

function atualizarQuantidadeCartas() {
    let html = "Quantidade de cartas: " + baralho.length
    var divQtdCartas = document.getElementById('quantidade-cartas').innerText = html
}

function proximaRodada() {
    document.getElementById('cartas')
        .innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta">`

    document.getElementById('btnSortear').style.display = "inline"

    document.getElementById('title-atribute').innerHTML = ""
    document.getElementById('resultado').innerHTML = ""

    document.getElementById('btnProximaRodada').style.display = "none"

    atualizarQuantidadeCartas()
}

function playSoundEffect(sound) {
    let audio = new Audio(sound)
    audio.play()
}

function disableButtons() {
    let ataque = document.getElementById('ataque')
    ataque.className = "machine-layout"
    ataque.disabled = true

    let defesa = document.getElementById('defesa')
    defesa.disabled = true
    defesa.className = "machine-layout"

    let midichlorian = document.getElementById('midichlorian')
    midichlorian.disabled = true
    midichlorian.className = "machine-layout"
}