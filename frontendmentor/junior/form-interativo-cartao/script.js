function changeState(el, value){

    // esconder
    if(value == 1){
        el.classList.add('fade_out')
        el.addEventListener('animationend', ()=>{
            el.classList.add('hide')
            el.classList.remove('show')
            el.classList.remove('fade_out')
        })
    }// mostrar
    else{
        el.classList.remove('hide')
        el.classList.add('fade_in')
        el.addEventListener('animationend', ()=>{
            el.classList.add('show')
            el.classList.remove('fade_in')
        })
    }
}


// form
const form = document.querySelector('form')
changeState(form, 2)

const cvc = document.querySelector('#cvc')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const card_number = document.querySelector('#card_number')
const preview_cvc = document.querySelector('#preview_cvc')
const card_name = document.querySelector('#card_name')
const success = document.querySelector('#container_success')


// preview
const preview_number = document.querySelector('#preview_number')
const preview_name = document.querySelector('#preview_name')
const preview_valid = document.querySelector('#preview_valid')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    changeState(e.target, 1)

    e.target.addEventListener('animationend', ()=>{
    changeState(success, 2)
    })

})



card_number.addEventListener('input', (e)=>{
    checkMaxLength(e.target, 3)
    changeInfos(e.target.value, 1)
    if(e.target.value.length == 15){
        changeInfos(formatNumber(e.target.value), 1)
    }
})

card_name.addEventListener('input', (e)=>{
    
    checkMaxLength(e.target, 3)
    changeInfos(e.target.value, 3)


})

cvc.addEventListener('input',(e)=>{
    checkMaxLength(e.target, 1)
    changeInfos(e.target.value, 2)
})

month.addEventListener('input',(e)=>{
    checkMaxLength(e.target, 2)
    if(month.value.length == 2 && year.value.length == 2){
        changeInfos(`${e.target.value}/${year.value}`, 4)
    }
})
year.addEventListener('input',(e)=>{
    checkMaxLength(e.target, 2)
    if(month.value.length == 2 && year.value.length == 2){
        changeInfos(`${e.target.value}/${month.value}`, 4)
    }
})

function formatNumber(str)
{
    let formatado = []

    formatado.push(str.slice(0,4))
    formatado.push(str.slice(4,4+6))
    formatado.push(str.slice(10))

    return formatado.join(' ')
    
}


function changeInfos(text, value){

    function change(el, content){
        el.classList.remove('fade_in')
        el.innerHTML = content
        setTimeout(()=>{
            el.classList.add('fade_in')
        }, 500)
    }

    switch (value) {
        case 1:
            change(preview_number, text)
            break;
        case 2:
            change(preview_cvc, text)
            break;
        case 3:
            change(preview_name, text)
            break;
        case 4:
            change(preview_valid, text)
            break;
    
        default:
            break;
    }
}

function checkMaxLength(el, value){

    let str = el.value

    switch (value) {
        case 1:        
            if(str.length > 4){
                el.value = str.slice(0,4)
            }
            break;
        case 2:
            if(str.length > 2){
                el.value = str.slice(0,2)
            }
            break;
        case 3:
            if(str.length > 15){
                el.value = str.slice(0,15)
            }
            break;
        default:
            break;
    }
}


