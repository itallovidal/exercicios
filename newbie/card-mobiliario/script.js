const btn = document.querySelector('#container-btn-midias')

btn.addEventListener('click', mostraMidias)

function mostraMidias()
{
    const device = window.innerWidth > 500 ? 'desktop' : 'mobile'
    const midiasDesktop = document.querySelector('.midias-desktop')
    const midiasMobile = document.querySelector('.midias-mobile').parentNode


    if(device == 'desktop'){

        let visibilidade = midiasDesktop.dataset.show
    
        if(visibilidade == 0){
            console.log('mostrando')
            midiasDesktop.style.display = 'flex'
            midiasDesktop.classList.add('mostrando')   
            midiasDesktop.dataset.show = 1 
        }else{
            midiasDesktop.classList.remove('mostrando')
            midiasDesktop.classList.add('ocultando')
            midiasDesktop.dataset.show = 0 
        }
    }
    else
    {

        let visibilidade = midiasMobile.dataset.show
    
        if(visibilidade == 0){
            console.log('mostrando-mobile')
            midiasMobile.style.display = 'grid'
            midiasMobile.classList.add('mostrando-mobile')   
            midiasMobile.dataset.show = 1 
        }else{
            midiasMobile.classList.remove('mostrando-mobile')
            midiasMobile.dataset.show = 0 
        }
    }
}

window.addEventListener('resize',()=>{
    window.location.reload()
})