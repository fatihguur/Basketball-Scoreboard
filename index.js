let homeScore = 0;
let guestScore = 0;

let homeScoreEl=document.getElementById("home-score-el");
let guestScoreEl=document.getElementById("guest-score-el");



function addHome1Points() {
homeScore += 1;
homeScoreEl.textContent = homeScore;
}

function addHome2Points() {
homeScore += 2;
homeScoreEl.textContent = homeScore;
}

function addHome3Points() {
homeScore += 3;
homeScoreEl.textContent = homeScore;
}

function addGuest1Points() {
guestScore += 1;
guestScoreEl.textContent = guestScore;
}

function addGuest2Points() {
guestScore += 2;
guestScoreEl.textContent = guestScore;
}

function addGuest3Points() {
guestScore += 3;
guestScoreEl.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;

    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}