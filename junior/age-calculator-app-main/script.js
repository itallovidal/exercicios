const spanDias = document.querySelector('#dias')
const spanMes = document.querySelector('#meses')
const spanAnos = document.querySelector('#anos')
const btn = document.querySelector('#container_btn')
const card = document.querySelector('#container_card')

//------------------------------------------------------------

function contaAnos(d,m,a){
    // const month = (((1000 * 60) * 60) * 24) * 30;
    const anoMs = (((1000 * 60) * 60) * 24) * 365; // ano em milissigundos

    // data atual
    const dataAtual = Date.now()
    dataUsuario = new Date(`${m} ${d} ${a}`)
    return (Math.round(dataAtual / anoMs) - Math.round(dataUsuario.getTime() / anoMs)) - 1
}

function contaMeses(mesPassado){
    const date = new Date()
    let contadorMeses = 0
    mesAtual = date.getMonth() + 1

    if(mesPassado == mesAtual){
        return contadorMeses
    }
    else{
        while(mesPassado != mesAtual){

            if((mesPassado + 1) > 12){
                mesPassado = 0
            }

            mesPassado = mesPassado + 1
            contadorMeses = contadorMeses + 1
        }

        return contadorMeses
    }
}

function contaDias(diaPassado){
    const date = new Date()
    let contadorDias = 0
    diaAtual = date.getDay()

    meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    i = 0

    if(diaPassado == diaAtual){
        return contadorDias
    }
    else{
        
        while(diaPassado != diaAtual){
            limiteMes = meses[date.getMonth() + i]

            if(limiteMes == undefined){
                i = 0
                limiteMes = meses[date.getMonth() + i]
            }

            if((diaPassado + 1) > limiteMes){
                diaPassado = 0
            }

            diaPassado = diaPassado + 1
            contadorDias = contadorDias + 1
            i = i + 1
        }

        return contadorDias
    }
}


btn.addEventListener('click', ()=>{
    const d = Number(document.querySelector("#dia").value) 
    const m = Number(document.querySelector("#mes").value) 
    const a = Number(document.querySelector("#ano").value) 
    valor = checkDate(d,m,a)

    console.log(valor)

    if(valor == true){
        spanDias.innerHTML = contaDias(d)
        spanMes.innerHTML = contaMeses(m)
        spanAnos.innerHTML = contaAnos(d, m, a)
    }
    else{
        let h1 = document.createElement('h1')
        h1.setAttribute('class', 'error')
        h1.classList.toggle('fade-in')
        card.appendChild(h1)

        switch (valor) {
            case 2:
                h1.innerHTML = 'Dia inválido.'
                break;
            case 3:
                h1.innerHTML = 'Mês inválido.'
                break;

            case 4:
                h1.innerHTML = 'Ano inválido.'
                break;
            default:
                break;
        }

        setTimeout(()=>{
            h1.classList.toggle('show')
            h1.classList.toggle('fade-in')
            h1.classList.toggle('fade-out')

            setTimeout(()=>{h1.remove()}, 2500)
        }, 2001)
    }
})

function checkDate(d,m,a){
    const date = new Date()

    console.log(d, m, a)
    if(d <= 0 || d > 31 || d == ''){
        return 2
    }

    if(m <= 0 || m > 12 || m == ''){
        return 3
    }

    if(a > date.getFullYear() || a < 1970 || a == ''){
        return 4
    }
    
    return true
}



