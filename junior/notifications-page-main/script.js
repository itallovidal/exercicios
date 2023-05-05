const card = document.querySelector('main')
const btn_readAll = document.querySelector('#btn_lerTodas')
const qtdNotificacoes = document.querySelector('#qtdNotificacoes')

const not = {
    1:{
        nome: 'Mark Webber', 
        fotoUrl: './assets/avatar-mark-webber.webp',
        info: ' reacted to your recente post:', 
        link: ' My First tournament today!',
        data: 'Few Seconds ago'
    },
    2:{
        nome: 'Angela Gray',
        fotoUrl: './assets/avatar-angela-gray.webp', 
        info: ' followed you!', 
        link: false,
        data: 'Few Seconds ago'
    },
    3:{
        nome: 'Jacob Thompson', 
        fotoUrl: './assets/avatar-jacob-thompson.webp',
        info: ' has joined your group', 
        link: ' Chess Club',
        data: 'Few Seconds ago'
    }
}


card.addEventListener('click', ()=>{
    card.classList.remove('container_geral')
    card.children[1].classList.toggle('not_aberta')
}, {once: true})

btn_readAll.addEventListener('click', ()=>{
    naoLidas = Array.from(document.querySelectorAll('div[data-lida="0"]'))

        for(let not of naoLidas)
        {
            not.classList.remove('notNova')
            not.setAttribute('data-lida','1')
        }

        verificaNotificacoes()
    }
)

function criaNotificacao(index){

    const primeiroElemento = card.children[1].firstChild

    containerNot = document.createElement('div')
    containerNot.classList.add('container_notificacao')
    containerNot.setAttribute('data-lida','0')
    containerNot.classList.add('notNova')

    containerNot.addEventListener( 'click', (e)=>{
        e.target.classList.remove('notNova')
        e.target.setAttribute('data-lida','1')
        verificaNotificacoes()
    })

    picture = document.createElement('picture')
    img = document.createElement('img')

    img.setAttribute('src', not[index].fotoUrl)

    div = document.createElement('div')
    h2 = document.createElement('h2')

    span = document.createElement('span')
    span.classList.add('nomePessoa')

    h2.append(span)
    span.innerHTML = not[index].nome
    h2.append(not[index].info)
    

    p = document.createElement('p')
    p.innerHTML = not[index].data

    containerNot.append(picture)
    picture.append(img)

    containerNot.append(div)
    div.append(h2)
    div.append(p)

    if(not[index].link != false){
        a = document.createElement('a')
        a.innerHTML = not[index].link
        h2.append(a)
    }

    card.children[1].insertBefore(containerNot, primeiroElemento)

    verificaNotificacoes()
}

function verificaNotificacoes(){
    naoLidas = Array.from(document.querySelectorAll('div[data-lida="0"]'))


    qtdNotificacoes.innerHTML = naoLidas.length
    qtdNotificacoes.classList.add('notAtiva')

    if(card.children[1].classList.contains('not_aberta') == false){
        card.classList.add('container_geral')
    }

    if(naoLidas.length == 0){
        qtdNotificacoes.classList.remove('notAtiva')
    }
}

for(let i in not){
    setTimeout(()=>{
        criaNotificacao(i)
    }, 5000 * i)
}

