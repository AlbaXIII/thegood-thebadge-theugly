# The Good, the Badge and the Ugly

The Good, the Badge and the Ugly is an interactive image quiz based on some of the more outlandish football club badges, implemented through HTML, CSS and JavaScript.

Whilst thinking about a project idea to submit for assignment 2, I stumbled upon an article from FourFourTwo magazine that listed the 17 weirdest badges in world football. This sparked an idea - and I decided to try and create a quiz based around the idea that some of the designs are so bizarre that it could be a fun challenge for the user to try and discern the name based on 3 multiple choice options, a format I enjoy from TV shows such as The Chase. In keeping with that intended structure, it was decided that the potential answers would have an (attempted) humourous edge to them, as the combination of unusual badge and comical potential answer would make for a memorable way to spend a couple of minutes for both casual and knowledeable football lovers.

With that in mind, the design philosophy would be to create a intiutive, clean and most of all enjoyable quiz with an clear scoring system and an ability to choose a username and record scores.

![series of responsive screenshots](readme-images/responsive-screenshot.png)

## Features

* __Background__
    * The intial design philosophy of the quiz was to use a single large background that immediately communicates visually to the user the theme of the site, and for this reason the background is a warm-contrasted image of a football pitch from above. 
    * Whilst this was an obvious choice, the top-down angle gives an isometric feel to the website reminiscent of a tactical screen in order to give a crisp look to the playing area and get the user into the mindset of the 'player'.

* __Header__
    * Above the game space are two headers, displaying the name of the site as well as the rules of the game. The font used is __"Graduate"__, chosen for its resemblance to retro football kit numbers to give the page a 'sporty' aesthetic, with solid white coloring to ehance this look.
    * Furthermore the lack of an overabundance of text allows the user to quickly comprehend the rules of the game and be able to jump straight into playing.
    * The font sizes used are calculated in rem to ensure reactivity to all screen sizes.

    ![username space](readme-images/username-space.png)

* __Game Space__
    * The primary design choice for the quiz was to make sure that all of the quiz' elements are contained with in one centralised div known as the 'game-space'. The design for this is using a strong solid white boundry with a low-opacity green background, meant to resemble a football pitch to keep with the theme of the site.
    * With reactivity in mind, the game-space is fully responsive for all devices, with media queries implemented for tablet and desktop screen sizes to ensure that the rectangular shape stays cohesive and the headers do not get lost in the background material on larger screens.

    ![username filled](readme-images/username-fill.png)

* __Username__
    * When intially navigating to the site, there is a username input box presented as validation for the user to begin playing. Through use of Javascript and local storage, the game will not begin until the username is defined by the user, wherein the chosen username is displayed above the game space during play to personalise the experience.

    ![username validation](readme-images/username-validation.png)

    * The signup function has an if/else block built in to stop users from starting the game without inputting any text, which triggers an alert.
    * After submission of the username to local storage, the begin button is called into display. The begin button is styled larger than the others, to provide the user with a clear call to action.

    ![game space](readme-images/game-space.png)

* __Game Space__
    * The signup space division and begin button are then hidden by the startQuiz function paired to the begin button, and the main game space is brought into view as part of the same function.
    * The questions have been organised as an array of objects, storing strings referring to the question image source, correct and incorrect options, and the correct answer image source. When the game begins, the next question function picks out a question at random and targets the relevant elements in the DOM with their specific strings.

    ![badge space](readme-images/badge-space.png)

    * On the top of the screen, the question badge is displayed - this is the clue for the user to guess from. I attempted to find the most unusual badges to provide the greatest challenge to the user. 
    * Beneath the badge are the quiz metrics - the current question number, current score and wrong answer count. These react to the quiz questions called and will reset to zero upon input of the start over button. Also present is a progress bar, which also reacts to the question number and fills up as the quiz goes on, bringing some extra user feedback to the space and create a more dynamic feel to the process.

* __Answer Space__
    * The answer space consists of the three mutliple choice buttons, all calling the check answer function as an event listener. The buttons themselves are styled with a clean bold border to draw the users eye and interact with the checkAnswer function so when they do change colour when the answer is checked, it has a very demonstrative effect for the user.

    ![game validation](readme-images/game-validation.png)

    * Once an answer is selected, the check answer function detects if  the inner HTML of the button called by the question matches the correct answer from the question object. The user can see the result in-game as the border and color of the answer buttons is changed depending on correct answer or not using addClassList and CSS classes.
    * When calling a new question, the next question function strips the answer buttons of their association with the correct/incorrect CSS classes to reset the answer space to default view.
    * With regards to design, the answer buttons are arranged in a column, in order to keep the game space compact and maximise visual clarity for the player.
    * After an answer input is detected, the answer buttons are then disabled in order to stop any further input from the user - the buttons are then re-enabled every time a new question is called from getQuestion.
    * The game is configured for 10 rounds, after which the game finishes and the score is displayed.
    * Throughout the game, should the user choosem they can click on the start over button visible to the bottom of the game space to reset all quiz metrics, reshuffle the questions, and begin the quiz again using the resetQuiz function.

* __Game Over__
    * Once the game has reached its 10th question, a play again button is made visible through the endGame function, with which the user can use the same resetGame function mentioned earlier to start the game again and attempt to beat their high scores - along with a thank you message.

    ![game over](readme-images/game-over.png)

* __404 Page__
    * Lastly, a custom 404 page has been prepared in the unlikely event the user cannot reach the correct page of the website. The page follows the same design philosophy of the index page, with a short message informing the viewer of the problem at hand and a hyperlink back to the homepage.

    ![page not found](readme-images/page-not-found.PNG)

## Testing

This project was designed prominantly for mobile screens before using media queries to apply reactivity to the game space. The initial screen during the design phase was the Samsung Galaxy Z Fold 5. Testing was also completed on the following screen sizes;

* iPhone 12 Pro (390x844)
* Google Pixel 7, Samsung Galazy S20 Ultra (412x915)
* iPhone XR (414x896)
* iPhone 14 Pro Max (430x932)
* iPad Mini (768x1024)
* iPad Air (820x1180)
* iPad Pro (1024x1366)
* Desktop (1920x1080)

Throughout development of the project, I used [Google Chrome developer tools](https://developer.chrome.com/docs/devtools) to monitor the site output and to interact with the console.

The quiz was created using Google Chrome, but has also been tested on;

* Mozilla Firefox
* Safari
* Opera

No significant differences in functionality were shown between browsers.

### Validators

HTML
* No HTML errors returned from the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Falbaxiii.github.io%2Fthegood-thebadge-theugly%2F).

![HTML validator](readme-images/html-validator.PNG)

CSS
* No CSS errors returned from the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/).

![CSS validator](readme-images/css-validator.PNG)

JavaScript
* NO major errors flagged in [JShint](https://jshint.com/).

Lighthouse 

* Mobile

![lighthouse mobile](readme-images/lighthouse-mobile.PNG)

* Desktop 

![lighthouse desktop](readme-images/lighthouse-desktop.PNG)

## Functional Testing

![functional testing table](readme-images/cip2-functional-testing.webp)

## Bugs and Issues

### Development

* When working with as many image elements as this project needed, the first issue encountered during the development cycle was how to initialise them in an accessible way. I initially attempted to declare each image (2 x for every question) as single variables (new Images) and then push all of them to a single image array, from where I could call them whenever.

For example;
        
        Let AlloaQuestion = new Image();
        alloaQuestion.src = "assets\images\badges\alloa-question.src"

The problem that came up using this method was the code quickly became very unwieldy and hard to read. The solution I decided to use was to keep an image element in the HTML with placeholder text in the .src path, and then instead of calling a seperate variable for the question/answer keys in the questions array, have the relative src file path as a string targetting the DOM img source element, which allowed me to keep the code relatively readable and compact.

        {
        questionId: 1,
        question: "assets/images/badges/alloa-question.webp",
        optionA: "Alloa Athletic",
        optionB: "Beecraig Town",
        optionC: "Hench Hornets FC",
        correctOption: "Alloa Athletic",
        correctImage: "assets/images/badges/alloa-answer.webp"
    },

* During the creation of the checkAnswer function, the reactivity I was aiming for on user input was to have the boundary surronding the correct answer be added to a specific .correct/.incorrect CSS class as a visual trigger to provide user feedback. Whilst this was simple to initially achieve for the single event target, in order to have the non-targeted button containing the correct answer react provided more of a headache. After a few solutions, I settled on expanding on the 'incorrect anwer' __if else__ block within the checkAnswer function after declaring the answer buttons as seperate variables above the function.

        else {
        if (answer1.innerText === currentQuestion.correctOption) {
            answer1.classList.add("correct");
        } else if (answer2.innerText === currentQuestion.correctOption) {
            answer2.classList.add("correct");
        } else if (answer3.innerText === currentQuestion.correctOption) {
            answer3.classList.add("correct");
        };
        event.target.classList.add("incorrect");
  
### Unfixed Bugs

* No known bugs on date of submission. 
* Occasional permissions error with favicon manifest shown in console, however it does not affect the loading of the icon or the user experience.

## Deployment

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
* Quiz format inspired by [this article](https://www.fourfourtwo.com/gallery/ranked-17-weirdest-club-badges-football) in FourFourTwo magazine January 2018. 

### Media
* All badges used are property of their respective clubs.
* Favicon made from image sourced on Google Images and converted using [Favicon.io](https://favicon.io/).
* PNG files converted to WEBP through [CloudConvert](https://cloudconvert.com/).
* Responsive screenshot from [amiresponsive?](ui.dev/amiresponsive).

### Personal
* As always, thanks to my mentor Dick Vlaanderen for his advice and constructive input throughout.

