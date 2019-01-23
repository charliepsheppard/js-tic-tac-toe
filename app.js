let $gameboard = document.querySelector('#game-board')

const cells = [
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 1, y: 2}, 
    {x: 2, y: 0},
    {x: 2, y: 1},
    {x: 2, y: 2}
]

let player = 1

const createGameBoard = () => {
    cells.forEach(function(cell) {
    // for(const cell of cells) 
        const div = document.createElement('div')

        div.classList = "square"
        div.style.top = (cell.y * 200).toString() + "px"
        div.style.left = (cell.x * 200).toString() + "px"

        div.addEventListener('click', function(e) {
            if (e.target.innerHTML == false) {
                switchPlayers(e)
            }
        })

        $gameboard.appendChild(div)
    })
}

const switchPlayers = e => {
    if (player === 1) {
        e.target.classList.add("one")
        player = 0
    }
    else {
        e.target.classList.add("two")
        player = 1
    }
}

createGameBoard()
