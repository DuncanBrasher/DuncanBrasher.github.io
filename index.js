let notes1First = [1, 2, 3, 3, 2, 1]
let notes1Answers = [[2, 1]]

let currentMelody = notes1First
let currentAnswers = notes1Answers

let input = []
let points = 0
// ----------
let note1Btn = document.getElementById('note1Btn')
let note2Btn = document.getElementById('note2Btn')
let note3Btn = document.getElementById('note3Btn')
let restartBtn = document.getElementById('restartBtn')
let playMelodyBtn = document.getElementById('playMelodyBtn')
let submitBtn = document.getElementById('submitBtn')
let scoreText = document.getElementById('scoreText')

restartBtn.addEventListener('click', (event) => {
    input = []
})

submitBtn.addEventListener('click', (event) => {
    if (currentAnswers.includes(input)) {
        points++
        scoreText.textContent = 'You win!'
    } else {
        scoreText.textContent = 'Not quite, try again!'
    }
})

playMelodyBtn.addEventListener('click', (event) => {
    let timeDelay = 0
    for (let i = 0; i < currentMelody.length; i++) {
        setTimeout(() => {
            let currentNote = currentMelody[i]
            if (currentNote == 1) {
                c.play()
            } else if (currentNote == 2) {
                d.play()
            } else if (currentNote == 3) {
                e.play()
            }
        }, timeDelay)
        timeDelay += 2000
    }
})

let c = new Audio('./assets/c.mp3')
let d = new Audio('./assets/d.mp3')
let e = new Audio('./assets/e.mp3')
note1Btn.addEventListener('click', (event) => {
    input.push(1)
    c.play()
})
note2Btn.addEventListener('click', (event) => {
    input.push(2)
    d.play()
})
note3Btn.addEventListener('click', (event) => {
    input.push(3)
    e.play()
})
// ----------
