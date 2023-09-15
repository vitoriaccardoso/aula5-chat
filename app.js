'use strict'

const pessoas = [

    {
        nome: 'Zayn',
        imagem: 'zayn.jpg',
        texto: 'Olá, tudo bem?',
        tempo: 'Há 45 minutos',
        mensagens: '1'
    },

    {
        nome: 'Taylor Swift',
        imagem: 'taylor.jpg',
        texto: 'Dont Blame me',
        tempo: 'Há 2 minutos',
        mensagens: '2'
    },

    {
        nome: 'Harry Styles',
        imagem: 'harry.jpg',
        texto: 'You´re so golden',
        tempo: 'Há 9 horas',
        mensagens: '7'
    },

    {
        nome: 'Bruno Mars',
        imagem: 'bruno.jpg',
        texto: 'Is it me?',
        tempo: 'Há 12 horas',
        mensagens: '6'
    },

    {
        nome: 'Olivia Rodrigo',
        imagem: 'olivia.png',
        texto: 'It´s a bad idea, right?!',
        tempo: 'Há 1 minuto',
        mensagens: '1'
    },

    {
        nome: 'The Weeknd',
        imagem: 'weeknd.jpg',
        texto: 'I can never say it on the phone',
        tempo: 'Há 12 dias',
        mensagens: '1'
    },

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntTxt = document.createElement('span')
    qntTxt.classList.add('qnt-txt')
    qntTxt.textContent = pessoa.mensagens

    const texto = document.createElement('p')
    texto.classList.add('texto')
    texto.textContent = pessoa.texto

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo


    nomeContainer.appendChild(nome)
    
    info.appendChild(nomeContainer)

    card.appendChild(img)

    card.appendChild(info)

    card.appendChild(tempo)

    info.appendChild(texto)

    nomeContainer.appendChild(qntTxt)
  
    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)
