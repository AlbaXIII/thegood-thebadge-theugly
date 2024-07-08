# The Good, the Badge and the Ugly

The Good, the Badge and the Ugly is an interactive image quiz based on some of the more outlandish football club badges, implemented through HTML, CSS and JavaScript.

Whilst thinking about a project idea to submit for Assignment 2, I stumbled upon an article from FourFourTwo magazine that listed the 17 weirdest badges in world football, and I decided to try and create a quiz based around the idea that some of the designs are so obtuse that it could be a fun challenge for the user to try and discern the name based on 3 multiple choice options, a format I enjoy from shows such as The Chase. In keeping with that intended structure, it was decided that the potential answers would have an (attempted) humourous edge to them, as the combination of unusual badge and comical potential answer would make for a memorable way to spend a couple of minutes for both casual and knowledeable sport lovers.

With that in mind, the design philosophy would be to create a intiutive, clean and most of all enjoyable quiz with an clear scoring system and an ability to choose a username and record a high score.

## Features

* __Background__
    * The intial design philosophy of the quiz was to use a single large background that immediatly communicates visually to the user the content of the site, and for this reason the background is a warm-contrasted image of a football pitch from above. 
    * Whilst this was an obvious choice, the top-down angle gives an isometric feel to the website remeniscent of a tactical screen in order to give a flat surface for the game surface whilst being subliminally 

* __Header__
    * At the head of the site above the game space are two headers, displaying the name of the site as well as the rules of the game. The font used is "XXXX", a font chosen for it's resemblance to retro football kit numbers to give the page an 'sporty' aesthetic, with solid white coloring to ehance this look.
    * Furthermore the lack of an overabundance of text allows the user to quickly comprehend the rules of the game and then being able to jump straight into playing.
    * The font sizes used are calculated in rem to ensure reactivity to all screen sizes.

* __Game Space__
    * The primary design choice for the quiz was to make sure that all of the quiz' elements are contained with in one centralised div known as the 'game-space'. The design for this is using a strong solid white boundry with a low-opacity green background, meant to resemble a football pitch to keep with the theme of the site.
    * With reactivity in mind, the game-space is fully responsive for all devices, with media queries implemented for tablet and desktop screen sizes to ensure that the rectangular shape stays cohesive and the headers do not get lost in the background material on larger screens.

* __Username__
    * When intially navigating to the site, there is a username input box presented as validation for the user to begin playing. Through use of Javascript and local storage, the game will not begin until the username is defined by the user, wherein the chosen username is displayed above the game space during play.
    * After filling in their username, the username signup area is hidden immediately after completion of the name submission in order to maintain the consistent flow of information to the game space, and the begin game button comes into view, styled with large lettering to show a clear call to action.
    * The signup function has a validation if validator built in to stop users from starting the game without inputting any text, which triggers an alert.

* __Question Space__
    * Once the user has defined their username, the quiz can begin on and eventlistener paired to the begin button.
    * The signup space divisions are hidden and the 
    * The questions have been organised as an array of objects, storing strings referring to the question image source, correct and incorrect options, and the correct answer image source. When the game is begun, the next question function picks out a question at random and targets the relevant images in the DOM with their specific strings. So for example below, XXX
    * On the top of the screen (left hand side on tablet screens and larger), the question badge is displayed - this is the clue for the user to guess from. I attempted to find the most unusual badges for the quiz to provide the greatest challenge to the user. 
    * Beneath the badge are the quiz metrics - the current question number, current score and wrong answer count. These react to the quiz questions called and will reset to zero upon input of the start over button.

* __Answer Space__
    * The answer space consists of the three mutliple choice buttons, all calling the check answer function as an event listener to XX.
    * Once an answer is selected, the check answer function is called and XXX. The user can see the result in-game as the border and color of the answer buttons is changed depending on correct answer or not.
    * When calling a new question, the next question function strips the answer buttons of their association with the correct/incorrect CSS classes to reset the answer space to default view.
    * The game is configured for 10 rounds, after which the game finishes and the score is displayed.

* __Final Score__
    * 


## Testing

## Validators



## Functional Testing

## Bugs and Issues

### Development



### Unfixed Bugs

## Deployment

* No known bugs on date of submission.

### Github Pages

* The site has been deployed on __Github Pages__, using the following method;
    * In the Github repo, navigate to settings tab on master code repo page.
    * Click on __pages__ from the left hand menu.
    * Select source - deploy from branch and making sure main/root is selected beneath.
    * Once these settings are correct, select save.
    * The live link will show at the top of the page if deployment is successful.
    * Live page can also be accessed afterwards from the main repo, in the deployment box on the right-hand side.

The live link is found through this address - __[https://albaxiii.github.io/thegood-thebadge-theugly/](https://albaxiii.github.io/thegood-thebadge-theugly/)__.

### Cloning

* The site is also cloneable using Github;
    * From the main page repo, select the green code button.
    * Copy the URL to clipboard.
    * Open Git Bash or other command-line interface.
    * Select your desired location.
    * Copy the URL into the window, and running __git clone https://albaxiii.github.io/thegood-thebadge-theugly/__.

## Technologies Used
* HTML
* CSS
* JavaScript
* Adobe Photoshop

## Credits

### Content

* Game space structure loosely based on HTML & CSS provided in Code Institute's 'Love Maths'.

### Media
* All badges used are property of their respective clubs.
* Favicon made from image sourced on Google Images and converted using Favicon.io.
* PNG files converted to WEBP through CloudConvert.
* Responsive screenshot from amiresponsive?.

### Personal
* As always, thanks to my mentor Dick Vlaanderen for his advice and constructive input throughout.

