const cocktails =[
    {
        name:'Margarita',
        flavour: 'salty',
        drinkingCompanion: 'grandma',
        level: 'moderate',
        personality: 'habit',
        location: 'pool',
        counter: 0,
        ingredients: ['1 oz silver tequila', '1 oz orange liqueur, such as Cointreau', '1/2 oz fresh lime juice', 'splash of simple syrup', 'salt'], 
        directions: 'Combine the tequila, orange liqueur, lime juice and simple syrup in an ice-filled cocktail shaker. Shake until cold, and strain into a chilled, salt-rimmed rocks glass. Garnish with lime wedge.',
        url: 'images/margarita_small.jpg',
        similarRecipies: []
    },
    {
        name:'Manhattan',
        flavour: 'bitter',
        drinkingCompanion: 'alone',
        level: 'beginner',
        personality: 'stoic',
        location: 'bathtub',
        counter: 0,
        ingredients: ['ice', '2 oz whiskey', '3/4 oz sweet vermouth', '1 to 2 dashes bitters', 'orange peel'],
        directions: 'Place ice in a cocktail shaker. Add the whiskey, vermouth and bitters. Rub the orange peel around the rim of the cocktail glass. Strain the drink into the glass. Enjoy!',
        url: 'images/manhattan_small.jpg'
    },
    {
        name: 'Paper Plane',
        flavour: 'tangy',
        drinkingCompanion: 'partner',
        level: 'quick',
        personality: 'adventure',
        location: 'friendHome',
        counter: 0,
        ingredients: ['ice', '3/4 oz bourbon', '3/4 oz Nonino Quintessentia amaro', '3/4 oz Aperol', '3/4 oz fresh lemon juice' ],
        directions: 'Fill a cocktail shaker with ice. Add all of the ingredients and shake well. Strain into a chilled coupe.',
        url: 'images/paper_plane_small.jpg'
    },
    {
        name: 'Jager Bomb',
        flavour: 'sweet',
        drinkingCompanion: 'friends',
        level: 'zero',
        personality: 'party',
        location: 'patio',
        counter: 0,
        ingredients: ['1/2 can Red Bull energy drink', '1 - 2 oz Jagermeister herbal liqueur'],
        directions: 'Pour red bull into a medium sized glass. Add a shot glass of jagermeister, and chug.',
        url: 'images/jager_small.jpg'
    },
    {
        name:'Pisco Sour',
        flavour: 'sour',
        drinkingCompanion: 'coworkers',
        level: 'expert',
        personality: 'anything',
        location: 'kitchen',
        counter: 0,
        ingredients: ['1 1/2 oz Peruvian Pisco', '1 oz key lime juice', '1 tablespoon aquafaba', '3/4 oz simple syrup', '1/4 cup ice', 'dash of bitters'],
        directions:'Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.',
        url: 'images/pisco_small.jpg'
    }
];

$(function(){
        
    $('.question__resetBtn').on('click', function(e) {
        //reset all data that is accumulated, set all visibility to hidden for everything, but set .main to visible
        e.preventDefault();
        $('.question').css('visibility', 'hidden');
        $('.main').css('visibility', 'visible');
        window.location.reload(true);
    });

    $('.question__lastBtn').on('click', function(e) {
        const userAnswerOne = $('input[name=flavour]:checked').val();
        const userAnswerTwo = $('input[name=drinkingCompanion]:checked').val();
        const userAnswerThree = $('input[name=level]:checked').val();
        const userAnswerFour = $('input[name=personality]:checked').val();
        const userAnswerFive = $('input[name=location]:checked').val();

        const answer = {
            flavour: userAnswerOne,
            drinkingCompanion: userAnswerTwo,
            level: userAnswerThree,
            personality: userAnswerFour,
            location: userAnswerFive
        };
        
        for (let i = 0; i < cocktails.length; i++) {
            if (answer.flavour === cocktails[i].flavour) {
                cocktails[i].counter++;
            }
        }

        for (let i = 0; i < cocktails.length; i++) {
            if (answer.drinkingCompanion === cocktails[i].drinkingCompanion) {
                cocktails[i].counter++;
            }
        }

        for (let i = 0; i < cocktails.length; i++) {
            if (answer.level === cocktails[i].level) {
                cocktails[i].counter++;
            }
        }

        for (let i = 0; i < cocktails.length; i++) {
            if (answer.personality === cocktails[i].personality) {
                cocktails[i].counter++;
            }
        }

        for (let i = 0; i < cocktails.length; i++) {
            if (answer.location === cocktails[i].location) {
                cocktails[i].counter++;
            }
        }

        const finalCocktail = _.max(cocktails, function(cocktail){
            return cocktail.counter;
        });

        console.log(finalCocktail.name);
        $('.answerHere').append(`<h3 class="choice">${finalCocktail.name}</h3>`);
        $('.answerHere').append(`<img src="${finalCocktail.url}">`);
        finalCocktail.ingredients.forEach(function(e) {
            $('.listHere').append(`<li>${e}</li>`);
        })
        $('.directionsHere').append(`<p>${finalCocktail.directions}</p>`)
    });

    $('.question__startBtn').on('click', function (e) {
        e.preventDefault();
        $('.question').css('visibility', 'visible');
        const sibling = $(this).closest('.question').next('.question');
        $('.question').css('visibility', 'hidden');
        sibling.css('visibility', 'visible');
        console.log($(this).closest('.question').next('.question'));
    });
    
    $('.question__submitBtn').on('click', function (e) {
        e.preventDefault();
        $('.question').css('visibility', 'visible');
        const sibling = $(this).closest('.question').next('.question');
        $('.question').css('visibility', 'hidden');
        sibling.css('visibility', 'visible');
        console.log($(this).closest('.question').next('.question'));
     });
});
