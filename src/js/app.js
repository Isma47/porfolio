//Variables

//Menu hamburguesa
const menuHamburguesa = document.querySelector('.menu-hamburguesa')
//contactos
const redes = document.querySelector('.contactos')
const contacto = document.querySelector('.contacto')

menuHamburguesa.addEventListener('click', () => {
    animacionMenu(menuHamburguesa)
})

contacto.addEventListener('click', ()=>{
   abrirContacto(contacto);
})
//contacto 


//Funciones

//Animación menu hamburguesa
function animacionMenu(e) {
    const aparecerNavegacion = document.querySelector('.header-nav');
    aparecerNavegacion.classList.toggle('menu-fixed');
    
}


//contactos

function abrirContacto(e){
    redes.classList.toggle('abrircontacto');
    
}




