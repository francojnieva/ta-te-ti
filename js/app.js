let turnPlayer = true
let gameOver = false
const gameCell = document.querySelectorAll('.game-cell')
const btnReset = document.getElementById('btn-reset')

for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].addEventListener('click', userMove)
}

function userMove(e) {
    if (gameOver) return 

    let cellValue = e.target.innerHTML
    // console.log(cellValue)
    if (!cellValue.length) {
        e.target.innerHTML = turnPlayer ? 'X' : 'O'
        turnPlayer = !turnPlayer
    }

    winPosition(0, 1, 2)
    winPosition(3, 4, 5)
    winPosition(6, 7, 8)
    winPosition(0, 3, 6)
    winPosition(1, 4, 7)
    winPosition(2, 5, 8)
    winPosition(0, 4, 8)
    winPosition(6, 4, 2)
}

function winPosition(c1, c2, c3) {
    if (
        gameCell[c1].innerHTML.length && 
        gameCell[c1].innerHTML === gameCell[c2].innerHTML && 
        gameCell[c2].innerHTML === gameCell[c3].innerHTML
    ) {
        showWinner(gameCell[c1].innerHTML)
        gameOver = true
    }
}

function showWinner(player) {
    const notificactionContainer = document.getElementById('notification-container') 
    const notification = document.createElement('p')
    notification.classList.add('p-3', 'bg-danger', 'rounded', 'text-white')
    notification.textContent = `¡${player} es el ganador!`

    notificactionContainer.appendChild(notification)
}

btnReset.addEventListener('click', resetGame)

function resetGame() {
    for (let i = 0; i < gameCell.length; i++) {
        gameCell[i].innerHTML = ''
    }

    gameOver = false
    turnPlayer = true

    const notificactionContainer = document.getElementById('notification-container')
    notificactionContainer.innerHTML = ''
}