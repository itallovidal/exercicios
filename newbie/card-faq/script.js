import {textos} from "./modules/texts.js";

const dropDown = Array.from(document.querySelectorAll('.dropdown-btn'))

dropDown.map((e)=>{
    e.addEventListener('click', changeState)
})

console.log(dropDown)

function changeState()
{   
    if(checkClicked(this) == true)
    {
    // pegando container da questão
    const containerQuestion = this.parentNode
    // capturando qual pergunta é
    const question = this.dataset.question

    // criando o paragrafo
    const p = document.createElement('p')

    // adicionando o texto
    p.innerHTML = textos[question]

    // adicionando no container 
    containerQuestion.appendChild(p)
    }
}

function checkClicked(obj)
{
    const result = document.querySelector('p')

    if(result == null)
    {
        return true
    }

    const clicked = result.previousElementSibling
    result.classList.remove('mostrando')
    result.classList.add('removendo')
    result.remove()
    if(clicked.dataset.question != obj.dataset.question)
    {
        console.log('dif')
        return true
    }

    return false
}