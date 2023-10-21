

const game = {
    nbPixels: 6,   
    sizePixel: 50,
    selectedColor: 'square--dark',
    squareColors: ['square--dark', 'square--gray', 'square--green', 'square--yellow'],

 
    handleClickOnColorSelector: function(event) {
        const selectorElement = event.target;
        const color = selectorElement.id;
        console.log('click sur le bouton '+color);
        const selectorElements = document.querySelectorAll('.selector');
        for(let i = 0; i < 4; i++) {
            selectorElements[i].classList.remove('selector--selected');
        }
        game.selectedColor = 'square--'+color;
        selectorElement.classList.add('selector--selected');
    },

    initBtnSelectorColors: function() {
 
        const selectorElements = document.querySelectorAll('.selector');
        for(let i = 0; i < 4; i++) {
            const selectorElement = selectorElements[i];
            selectorElement.addEventListener('click', game.handleClickOnColorSelector)
        }
    },

    handleClickOnSquare: function(event) {
        console.log('Clic sur la case');

        const squareElement = event.target;

        for(const squareColor of game.squareColors) {
           
            if(game.selectedColor === squareColor) {
             
                squareElement.classList.toggle(game.selectedColor);
            }
            
            else {
           
                squareElement.classList.remove(squareColor);
            }
        }

        console.log(`Valeur de selectedColor : ${game.selectedColor}`);
        console.log(`Valeur de squareElement :`)
        console.log(squareElement);

    },

 
    createGrid: function() {
        const painterElement = document.querySelector('#painter');
        
     
        const gridSize = game.nbPixels * game.sizePixel;
        painterElement.style.width = gridSize + "px";

       
        painterElement.textContent = '';

        const nbPixelsMax = game.nbPixels * game.nbPixels;
        for(let i = 0; i < nbPixelsMax; i++) {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square');

            squareElement.style.width = game.sizePixel + "px";
            squareElement.style.height = game.sizePixel + "px";

            squareElement.addEventListener('click', game.handleClickOnSquare);
            painterElement.append(squareElement);
        }
    },

    
    handleFormSubmit: function(event) {
        event.preventDefault(); 
        console.log('envoi du formulaire ...');

    
        game.nbPixels = Number(document.querySelector('.nbPixels').value);
    
        game.sizePixel = Number(document.querySelector('.sizePixel').value);
    
        game.createGrid();
    },


    initFormAction: function() {
     
        const formElement = document.querySelector('.configuration');
     
        formElement.addEventListener('submit', game.handleFormSubmit);
    },

    
    init: function() {
       
        game.createGrid();
        game.initBtnSelectorColors();
        game.initFormAction();
    }

};



game.init();







