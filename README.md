# CS465-565-assignments
Full Stack Web Development - Fall 2019 

# Assignment - 1 - HTML

 Exercise1 : Create an html file with the header, input fields (First name,Last name,Email), and buttons (Submit,Reset). 
 
 Exercise2 : Recreate html element from http://placekitten.com/ . 
 
 Exercise3 : Create an html file having below things which will be beginning of portfolio project.
 
            1. your name and a brief bio
            2. header, footer, and at least one section element
            3. an ordered or unordered list of links
            4. at least three types of headers
            5. at least three photo elements
            6. a contact form with input elements for email and a submit button           
            
# Assignment - 2 - CSS

  Exercise1 : Make a copy of Assignment-1's exercise1.html and style the elements according to the final look below. You can write your     CSS code within <style> tags within your .html file or you can create an exercise1.css file and link to it.
  
        ❏ To center the form I have used flex display.
        ❏ I have used linear-gradient for background color.
        ❏ I have used :hover and :focus selector to change color of button Whenever the user hovers or focuses on a button.

  Exercise2 : I have used CSS grid to style the elements of Assignment-1's exercise2.html to make it loosely same as the website http://placekitten.com/. 
  
  Exercise3 : I have started styling my portfolio with CSS.
  
  # Assignment - 3 - CSS Layout and Bootstrap
  
    Exercise1 : I have created form usign Bootstrap. And to center form (Vertically and horizontally) I have used flex. 
    
    Exercise2 : I have created this layout using Bootstrap grid system.
    
    Exercise3 : I have created this layout using inline block.
    
    Exercise4 : I have created this layout using bootstrap grid system.
    
    Exercise5 : I have created this layout using flexbox.
    
    Exercise6 : I have created this layout using CSS grid.
    
    Exercise7 : I have created this layout using flexbox.
    
    Exercise8 : I have created this layout using bootstrap grid system.
    
 # Assignment - 4 - JavaScript
 
    Exercise1 : I have Written a program using JavaScript that uses console.log to print all the numbers from 1 to 100, with some        
    exceptions. For numbers divisible by 3, print “fizz” and for numbers divisible by 5 (but not 3), print “buzz. For numbers divisible by 
    3 and 5, print “fizzbuzz.”
    
    Exercise2 : I have written a program to reverse a number using JavaScript. For example for input = 231756 output will be 657132.
    
    Exercise3 : I have written JavaScript program for Assignment-3's Bootstrap form that Whenever the user submits the form, output the  
    data from the form in the following format to the console:
       name: Jane Doe
       email: jane@janedoe.com 
       message: This is a test message.
    and Whenever the user clicks the “reset” button, reset the values of each input field.
    
    Exercise4 : I have written JavaScript program to output current width and height of window whenever it is resized. To display output I 
    have used two divs.
    
    Exercise5 : I have created button and whenever user clicks on button background color will be changed randomly. For that I have      
    written Javascript program to generate random hexcode to change background color.
    
  # Assignment 5 - Node and Express
    Used bootstrap form created in privous assignment for this assignment. I have assigned action="/submit" and method="POST" to form 
    element which will send the data of name, email and comment of from to server when user will submit the form. 
    In app.js, I have created an Express server and handle the route indicated in the form above and print the name, email, and comment in 
    the appropriate page. I have used body-parser middleware for parsing incoming request bodies.
    To start express server navigate to folder where app.js is located and run node app.js. It will start express server. For this 
    assignment run below command to start express server. 
    cd Assignment-5
    node app.js
    
  # Assignment 6 - Node, Express, React, Angular, TypeScript, Vue
  
    Completed below tutorials : 

    1. Create Your First Angular App - Codelabs:https://codelab.fun/angular/create-first-app/intro
    
       Steps to create my-angular-app :
       1. Installed the Angular CLI npm install -g @angular/cli
       2. Created my angular app using command ng new my-angular-app
       3. Run Angular application by navigating to the application folder and typing ng serve to start the web server and open the 
          application in a browser. Run below commands in terminal.
           cd my-angular-app 
           ng serve
       
       Modified Files : 
       1. my-angular-app/src/index.html
       2. my-angular-app/src/main.ts
       3. my-angular-app/src/app/app.module.ts
       4. my-angular-app/src/app/app.component.ts
       
    2. Intro to React - Reactjs.org: https://reactjs.org/tutorial/tutorial.html 
       
       Steps to create React app :
       1. Make sure you have a recent version of Node.js installed.
       2. Created react app using this command : npx create-react-app my-app
       3. run npm start in the project folder and open http://localhost:3000 in the browser, to see tic-tac-toe.
          Run below command in terminal.
          cd my-app
          npm start
       
       Modified files :
       1. my-app/src/index.js 
       2. my-app/src/index.css  
    
    3. Mini Workshop 1 - Build a Simple Pet Fetching Web Application - Vue
       Vixens: https://workshops.vuevixens.org/workshop/minis/mini1.html
       
       Modified files :
       1. vue-template/src/App.vue
       2. vue-template/package.json
       3. vue-template/public/index.html
       4. vue-template/src/main.js
       5. vue-template/src/components/Dog.vue
       6. vue-template/src/plugins/veutify.js
       
      
       
    
  
