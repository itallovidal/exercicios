const btn = document.querySelector('button')
const form = document.querySelector('form')
const c_sucesso = document.querySelector('#container-sucesso')


const c_msg = document.querySelector('#container-msg')



form.addEventListener('submit', (e)=>{
    e.preventDefault()

    form.classList.add('fade-out')
    c_msg.children[0].classList.add('fade-out')

    setTimeout(()=>{
        form.style.display = 'none'
        c_sucesso.style.display = 'initial'
        c_sucesso.classList.add('fade-in')

       c_msg.children[0].remove() 
       const congrats = document.createElement('p')

       congrats.textContent = "Congrats!"
       c_msg.append(congrats)    
       congrats.classList.add('fade-in')
       congrats.classList.add('congrats')
    }, 502)
})

