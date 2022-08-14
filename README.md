# TeamProfileGenerator

  ## Table of Contents
  - [Project Description](#description)
  - [Installation](#installation)
  - [Demo Video](#Demo-Video)

  ## Description
   This app is to generate a team profile page using command line.
   
   Start using the app, user is firstly prompted with questions to build a manager for the team. Information such as manager's name, id, email address and office number is included.
   
   Then user is asked to choose whether, engineer or/and intern is to be added to the team.
   
   If engineer is selected, user will answer questions re engineer's name, id, email address and github username.
   
   If intern is selected, user will answer questions re intern's name, id, email address and school.
   
   User is free to add as many as engineers or/and interns as he/she wishes.
   
   When user finishes adding all the team members, a html is generated where each team member has a card listing their job title, and other relavant information based on user's input. 
   
   Email address and github username shown on the page are clickable. Clicking on email address opens up user's default email app; and clicking on github username takes user to the Github page in a new tab.

  ## Installation
   To install necessary dependencies, run the following command in terminal:
   ```
   npm i
   ```
   then run the program with the command 
   ```
   node index.js
   ```
   Test the app with
   ```
   npm run test
   ```

  ## Demo Video
   Please click [here](https://watch.screencastify.com/v/sUNUR4GNEvW5dty3PBAt) to watch the demo video of this app.
