// Pegando a classe de css
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

// Adicionando a classe jump ao apertar uma tecla
const jump = () => {
    mario.classList.add('jump')

    // Removendo a classe jump dp css
    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500);
}


const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    

    // Condição de Game Over
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10)

// Adiconando evento de jump ao apertar uma tecla
document.addEventListener('keydown', jump)