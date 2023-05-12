const stats = Array.from(document.querySelectorAll('.barraGastos'))
const btn = document.querySelector('button')
const form = document.querySelector("#container_form")
const stats_container = document.querySelector('#container_estatisticas') 
const total_spent = document.querySelector('#total_gasto')
const lastWeek = document.querySelector('.semanaAnterior')
const week_exp = Array.from(document.querySelectorAll('.semanaAtual'))

function inputCheck(el)
{
    if(el == ''){
        return false
    }

    if(el.length < 1){
        return false
    }

    return true
}

function checkLength(e){
    input = e.target
    if(input.value.length > 5){
        input.value = input.value.slice(0,5)
    }
}

function fillStats(statusBar,  value, total, lastWeek){
    let percentage = Number((100 * value) / total)
    statusBar.style.height = percentage + '%'

    total_spent.innerHTML = total

    const lastWeek_span = document.querySelector('#total_anterior')
    lastWeek_span.innerHTML = lastWeek

    const weekDiff_span = document.querySelector('strong')
    if(lastWeek >= total){
        weekDiff = Number(((lastWeek - total) / lastWeek) * 100)
    }else{
        weekDiff = Number(((total - lastWeek) / lastWeek) * 100)
    }
    console.log(weekDiff)
    weekDiff_span.innerHTML = weekDiff + "%"

}


/////////////////////////////////


stats.forEach((el)=>{
    el.addEventListener('click', (e) => {
        let span = e.target.children[0]
        span.classList.toggle('show')
    })
})

lastWeek.addEventListener('input', checkLength)

week_exp.forEach((el)=>{
    el.addEventListener('input', checkLength)
})


btn.addEventListener('click', ()=>{
    const verification = []

    week_exp.forEach((el)=>{
        verification.push(inputCheck(el.value))
    })

    verification.push(inputCheck(lastWeek.value))

    // caso nao tenha input preenchido
    if(verification.includes(false) == true){
        console.log('input não preenchido')
    } 
    else{ // caso esteja tudo correto
        console.log('tudo correto')

        form.classList.add('fade_out')

        form.addEventListener('animationend', ()=>{
            form.style.display = 'none'
            stats_container.classList.remove('hide')
            stats_container.classList.add('fade_in')

            let total = 0
            for (let index = 0; index < week_exp.length; index++) {
                total = total + Number(week_exp[index].value)
            }

            for(let i = 0; i < week_exp.length ;i++){
                fillStats(stats[i], week_exp[i].value, total, lastWeek.value )  
            }
        })
    }
})





