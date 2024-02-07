// EFEITO DIGITAÇÃO 

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt (".animated", {
        speed: 100,
        
        loop: true
    }).type ('Estratégias de Marketing Digital', {delay: 500}).delete (32).type ('SEO- Search Engine Optimization', {delay:500}).delete (31).type ('Alojamento Cloud', {delay: 500}).delete (16).type ('Cibersegurança', {delay:500})
     
    .go ()
})

// EFEITO TELA

const myObserver= new IntersectionObserver ((entries) => {
    entries.forEach ((entry)=> {
        if (entry.isIntersecting){
            entry.target.classList.add ('show')
        } else {
            entry.target.classList.remove ('show')
        }
    })

})

const elements= document.querySelectorAll ('.hidden')

elements.forEach ((element) => myObserver.observe (element))

// SUBMENU

document.addEventListener('DOMContentLoaded', function () {
    const servicesItem = document.querySelector('.has-submenu');

    servicesItem.addEventListener('click', function () {
        // Adiciona ou remove a classe 'active' no item "Serviços" ao clicar
        this.classList.toggle('active');
    });
});

function toggleLista() {
    var listaContato = document.getElementById("lista-contato");
    listaContato.style.display = (listaContato.style.display === 'block') ? 'none' : 'block';
  }

  const btnMobile = document.getElementById('btn-responsivo'),
      navMenu = document.querySelectorAll('.nav-menu');

function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}


// MENU HAMBURGUER

const btnCelular = document.getElementById('btn-responsivo'),
      navLista = document.querySelectorAll('.nav-menu');

function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}

btnCelular.addEventListener('click', toggleMenu);
navLista.forEach(n => n.addEventListener('click', toggleMenu));

