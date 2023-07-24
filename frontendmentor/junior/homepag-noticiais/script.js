const menu_hamburguer = document.querySelector('#btn_menu_hamburguer')
const menu_Fechar = document.querySelector('#btn_menu_X')
const menu = document.querySelector('nav')

menu_hamburguer.addEventListener('click', ()=>{
    toggleMenu(1)
})
menu_Fechar.addEventListener('click', ()=>{
    toggleMenu(2)
})

function toggleMenu(valor){
    switch (valor) {
        // abrir
        case 1:
            menu.style.right = '0%'
            menu.classList.toggle('show_shadow')
            break;
    
        // fechar
        case 2:
            menu.style.right = '-70%'
            menu.classList.toggle('show_shadow')
            break;
        default:
            break;
    }
}