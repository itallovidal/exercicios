const spanDias = document.querySelector('#dias')
const spanMes = document.querySelector('#meses')
const spanAnos = document.querySelector('#anos')
const btn = document.querySelector('#container_btn')
const card = document.querySelector('#container_card')

//------------------------------------------------------------

function contaAnos(d,m,a){
    const anoMs = (((1000 * 60) * 60) * 24) * 365; // ano em milissigundos

    const date = new Date()
    mesAtual = date.getMonth() + 1

    // data atual
    const dataAtual = Date.now()
    dataUsuario = new Date(`${m} ${d} ${a}`)

    let anos = (Math.round(dataAtual / anoMs)) - (Math.round(dataUsuario.getTime() / anoMs))

    console.log(anos)
    if(m < mesAtual){
        return anos
    }
    else if(m == mesAtual ){
        if(d >= date.getDay()){
            return anos 
        }
        else{
            return anos - 1
        }
    }
    else{
        return anos - 1
    }
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


            if((mesPassado - 1) == 0){
                mesPassado = 13
            }

            mesPassado = mesPassado - 1
            contadorMeses = contadorMeses + 1
        }

        return contadorMeses
    }
}

function contaDias(diaPassado){
    const date = new Date()
    let contadorDias = 0
    let diaAtual = date.getDay()
    let mesAtual = date.getMonth()

    meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    i = 0



    if(diaPassado == diaAtual){
        return contadorDias
    }
    else{
        while(diaPassado != diaAtual){

            if((diaPassado - 1) == 0){
                diaPassado = meses[mesAtual - i]
                i++
            }

            diaPassado = diaPassado - 1
            contadorDias = contadorDias + 1
        }

        return contadorDias
    }
}


btn.addEventListener('click', ()=>{
    const d = Number(document.querySelector("#dia").value) 
    const m = Number(document.querySelector("#mes").value) 
    const a = Number(document.querySelector("#ano").value) 
    valor = checkDate(d,m,a)

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
                h1.innerHTML = 'Invalid Day.'
                break;
            case 3:
                h1.innerHTML = 'Invalid Month.'
                break;

            case 4:
                h1.innerHTML = 'Invalid Year..'
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



