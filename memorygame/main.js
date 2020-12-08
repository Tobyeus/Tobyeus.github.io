var cardsArray = [
    {   'name': '30meme',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/30.png?raw=true',},
    {   'name': 'cowabunga',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/cowabunga.jpg?raw=true',},
    {   'name': 'cursed',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/cursed1.png?raw=true',},
    {   'name': 'dudes',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/dudes.png?raw=true',},
    {   'name': 'japan',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/japan.png?raw=true',},
    {   'name': 'montecarlo', 'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/montecarlo.jpg?raw=true',},
    {   'name': 'plank',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/plank.jpg?raw=true',},
    {   'name': 'stopclickbait',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/stop-klickbait.jpg?raw=true',},
    {   'name': 'war-is-hell',     'image': 'https://github.com/Tobyeus/projects/blob/main/memorygame/images/war-is-hell.png?raw=true',}
];

// dupilicating the cards
var gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(function() {
    return 0.5 - Math.random();
})


var firstGuess = '';
var secondGuess = '';

var count = 0;
var previousTarget = null;
var delay = 1200;

var match = function() {
    var selected = document.querySelectorAll('.selected')
    for( let i=0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
}

var reset = function () {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    for( i=0;i< selected.length; i++) {
        selected[i].classList.remove('selected');
    }
}

// grab the div element
var game = document.getElementById('game-board');
// Set a grid variable and create an element section
var grid = document.createElement('section');
// Set class of the section element to grid
grid.classList.add('grid');
// Append the grid to the gameboard
game.appendChild(grid);

//
for(let i=0; i < gameGrid.length;i++){
    // create a div element with the variable card
    var card = document.createElement('div');
    // set the class of card to card
    card.classList.add('card');
    // set the data-name to the name value
    card.dataset.name = gameGrid[i].name;
    var front = document.createElement('div');
    front.classList.add('front');
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].image})`;
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}

grid.addEventListener('click', function(event) {
    var clicked = event.target;
    if( clicked.nodeName == 'SECTION' || clicked == previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected') ){
        return;
    }
    if( count < 2) {
        count++
        if(count == 1){
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }else{
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        
        if(firstGuess != '' && secondGuess != '') {
            if( firstGuess == secondGuess) {
                setTimeout(match, delay);
                setTimeout(reset, delay);
            } else {
                setTimeout(reset, delay);
            }
        }
        previousTarget = clicked;
    }

})
