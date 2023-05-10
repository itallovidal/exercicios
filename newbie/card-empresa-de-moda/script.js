const input = document.querySelector('input')
const form = document.querySelector('form')
const errorMsg = document.querySelector('#error')
const sucesso = document.querySelector('#sucesso')

function limpaInput(){
    if(input.value != 0) {
        
        setTimeout(() => {
        str = input.value
        console.log(input.value)
        input.value = str.slice(0, str.length - 1)
        limpaInput()

    }, 80)}else{
        sucesso.classList.add('sucesso')
        return false
    }
}


input.addEventListener('focusout',  ()=>{

    errorMsg.classList.add("retirando")
})

const btn = document.querySelector('button')

form.addEventListener('submit', (evt)=>{
    console.log('sucesso')
    evt.preventDefault();
    errorMsg.style.display = 'none'
    limpaInput()
})

