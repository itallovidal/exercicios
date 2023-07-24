const textos = {
    q1:`You can invite <span> up to 2 additional users </span> on the Free plan. There is <span>no limit</span> on team members <span>for the Premium plan.</span>`,
    q2: `<span>No more than 2GB.</span>All files in your account must fit your allotted storage space.`,
    q3: `Click <span> Forgot password </span> from the login page or <span> Change password </span> from your profile page. A reset link will be emailed to you.`,
    q4: `<span>Yes! </span> Send us a message and we'll process your request no questions asked.`,
    q5: `Chat and email support <span> is available 24/7. </span> Phone lines are open during normal business hours.`
}

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