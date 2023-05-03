const spanDias = document.querySelector('#dias')
const spanMes = document.querySelector('#meses')
const spanAnos = document.querySelector('#anos')
const btn = document.querySelector('#container_btn')

//------------------------------------------------------------

function contaAnos(d,m,a){
    // const month = (((1000 * 60) * 60) * 24) * 30;
    const anoMs = (((1000 * 60) * 60) * 24) * 365; // ano em milissigundos

    // data atual
    const dataAtual = Date.now()
    dataUsuario = new Date(`${m} ${d} ${a}`)
    return Math.round(dataAtual / anoMs) - Math.round(dataUsuario.getTime() / anoMs)
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

    if(checkDate(d,m,a)){
        spanDias.innerHTML = contaDias(d)
        spanMes.innerHTML = contaMeses(m)
        spanAnos.innerHTML = contaAnos(d, m, a)
    }
})

function checkDate(d,m,a){
    const date = new Date()

    if(d <= 0 || d > 31){
        return false
    }

    if(m <= 0 || m > 12){
        return false
    }

    if(a > date.getFullYear() || a < 1900){
        return false
    }
    
    return true
}



