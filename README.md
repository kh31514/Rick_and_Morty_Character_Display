# Prerequisites
Ensure you have the following installed on your machine:
* Node.js

# Getting Started
Clone the repository and open the corresponding folder
```
git clone https://github.com/kh31514/Rick_and_Morty_Character_Display.git
cd Rick_and_Morty_Character_Display
```
Navigate to the project directory and install the required packages using npm
```
cd my-app
npm install
```
Run the app
```
npm start
```
A browser window should automatically pop up at http://localhost:3000

# Approach
Prior to this project I had worked with React before, but never with API integration. After reading the project description I started by recognizing that I would need a component for the character cards. I looked to the Rick and Morty API to see what kind of information I could retrieve. Although not required, I chose to include an image in my character card to break up chunks of text and make the website more visually appealing. I was unfamiliar with Axios so I prompted ChatGPT for guidance on how to implement useState and useEffect. 

After building a basic card, I turned to App.js to see if I could make one card appear on my site. I planned to put many card components on the site, but I started my rendering just one as a sanity check. Once I could display one card, I continued by adding nine more, to make ten cards in total.

From there, I focused on implementing the sorting and then filtering functions. As of right now, all the functions are housed in the App function in App.js, but in future iterations of the project I would like to separate them into a separate file for better readability. I tested my functions informally through playing around with my site.

After verifying the sorting and filtering functions, I completed my project by adding css. I searched "Rick and Morty font" and used the results as inspiration in my color and font-style choices.

# Future Work
In future iterations of the project I would like to
* add more specifications and inline comments for documentation purposes
* refactor App.js for better readability
* add additional color scheme options (ex. light and dark mode)
* add an infinite scroll feature