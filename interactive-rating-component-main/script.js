const containerRating = document.querySelector('#container-rating')
const containerAgradecimento = document.querySelector('#container-agradecimento')
const containerError = document.querySelector('#container-error')
const containerSuccess = document.querySelector('#container-success')
// captura os dois containers
const spanRating = document.querySelector('span')
// verifica se algum input foi adicionado
const inputs = document.querySelectorAll('input')
// captura uma nodeList de todas as labels
const ls = document.querySelectorAll('label')
// transforma a nodeList para vetor
const labels = Array.from(ls)

// adicionando a classe que mostra 
// qual label foi selecionada
labels.map((e)=>{
    e.addEventListener('click', ()=>{
        for(label of labels)
        {
            label.classList.remove('selected')
        }

        e.classList.toggle('selected')
        console.log(e)
    })
})

// funcão que "envia" a classificacao
function submitRating()
{
    let rate = false

    for(input of inputs)
    {
        if(input.checked)
        {
            rate = input.value
        }
    }

    if(rate != false)
    { 
        spanRating.textContent = `${rate} de 5!`
        updateCard()
    }

    else
    {
        spanRating.textContent = `nada!`
        updateCard('left', false)
    }
}

function updateCard(dir = 'left', value = true){

    if(dir == 'left')
    {
        if(value)
        {
            containerError.style.display = "none"
            containerSuccess.style.display = "initial"
        }
    
        containerRating.classList.add('saindo')
        setTimeout(()=>{
            containerRating.style.right = "110%" 
            containerRating.classList.remove('saindo')  
        }, 602)
        containerAgradecimento.style.left= "0%"
    }
    else{
        containerRating.classList.add('entrando')
        setTimeout(()=>{
            containerRating.style.right = "0%" 
            containerRating.classList.remove('entrando')  
        }, 602)
        containerAgradecimento.style.left= "110%"
    }

}

// captura o botão de submit
const btnSubmit = document.querySelector('#submit')
// adiciondo o evento que "envia" a classificacao
btnSubmit.addEventListener('click', submitRating)

// captura o botão de voltar
const btnVoltar = document.querySelector('#btn-voltar')
btnVoltar.addEventListener('click', voltar)

function voltar(){
    updateCard('direita')
}