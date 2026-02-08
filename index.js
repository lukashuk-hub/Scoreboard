
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore


function addHome1() {
    homeScore = homeScore + 1
    homeScoreEl.textContent = homeScore
}

function addHome2() {
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore
}
function addHome3() {
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
}

function addGuest1() {
    guestScore = guestScore + 1
    guestScoreEl.textContent = guestScore
}
function addGuest2() {
    guestScore = guestScore + 2
    guestScoreEl.textContent = guestScore
}
function addGuest3() {
    guestScore = guestScore + 3
    guestScoreEl.textContent = guestScore
}

function resetBtn() {
    homeScore = 0
    guestScore = 0
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}