const handleImg = () => {
    const img = document.querySelector('#img')
    const sim = document.getElementById('sim')
    const nao = document.getElementById('nao')
    const tittle = document.querySelector('.tittle')
    img.style.display = 'block'
    nao.style.display = 'none'
    sim.style.display = 'none'
    tittle.style.display = 'none'
}

window.onload = function(){ 
    const nao = document.getElementById('nao')
    nao.onmouseover = () => {
        nao.classList.add('absoluto')
        let top = getRandomInt(0, (window.screen.height - 150))
        let left = getRandomInt(0, (window.screen.width -150))
        nao.style.top = `${top}px`
        nao.style.left = `${left}px`
    }
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
