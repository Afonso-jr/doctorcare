addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showbackToTopButtonwNavOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2
    
    //verificar se a seção passou da linha ao meio da tela
    //quiais dados são necessários?

    //o topo da seção
    const sectionTop = section.offsetTop
    
    //a altura da seção
    const sectionHeight = section.offsetHeight
   
    //o topo da secção chegou ou ultrapassou a linha alvo? 
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    console.log('O topo da seção chegou ou ultrapassou da linha?', sectionTopReachOrPassedTargetLine)

    //verificar se a base está abaixo da linha alvo 
    //quais dados vou precisar

    //a seção termina onde?
    const sctionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sctionEndsAt <= targetLine
    
    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const meuElemento = document.querySelector(`.menu a[href*=${sectionId}]`)

    meuElemento.classList.remove("active")
    if (sectionBoundaries) {
        meuElemento.classList.add("active")
   }      
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showbackToTopButtonwNavOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`)