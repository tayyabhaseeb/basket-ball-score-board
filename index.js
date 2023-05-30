let homeCount = document.getElementById('home-count')
let guestCount = document.getElementById('guest-count')

let count = 0
let secondCount = 0


// functions for Home

function add11(){
    count += 1
    homeCount.textContent = count
}

function add12(){
    count += 2
    homeCount.textContent = count
}

function add13(){
    count += 3
    homeCount.textContent = count
}


// Functions for guest


function add21(){
    secondCount += 1
    guestCount.textContent = secondCount
}

function add22(){
    secondCount += 2
    guestCount.textContent = secondCount
}

function add23(){
    secondCount += 3
    guestCount.textContent = secondCount
}

// New Game

function newGame(){
    homeCount.textContent = 0
    guestCount.textContent = 0
    count = 0;
    secondCount = 0;
}