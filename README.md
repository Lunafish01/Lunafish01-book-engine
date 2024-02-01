# Lunafish01-book-engine

## Description

This is a refactor of an already fully functional Google Books API search engine to help user search for new books to add to their reading list. The refactor was done using a MERN stack application which consists of a React front end, MongoDB database, and Node/Express.js server. I was tasked with refactoring the provided code to use a GraphQl API built with an Apollo Server. The app was previously set up to allow users to save book searches to the back end.

## Table of Contents

- [User Story](#user-story)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Issues](#issues)
- [Screen Shot](#screen-shot)
- [Links](#links)

## User Story

As an avid reader, I want to search for new books to read so that I can keep a list of books to purchase in the future and add to my reading list.

## Project Requirements

* GIVEN a book search engine
* WHEN I load the search engine
* THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
* WHEN I click on the Search for Books menu option
* THEN I am presented with an input field to search for books and a submit button
* WHEN I am not logged in and enter a search term in the input field and click the submit button
* THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
* WHEN I click on the Login/Signup menu option
* THEN a modal appears on the screen with a toggle between the option to log in or sign up
* WHEN the toggle is set to Signup
* THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
* WHEN the toggle is set to Login
* THEN I am presented with two inputs for an email address and a password and login button
* WHEN I enter a valid email address and create a password and click on the signup button
* THEN my user account is created and I am logged in to the site
* WHEN I enter my account’s email address and password and click on the login button
* THEN I the modal closes and I am logged in to the site
* WHEN I am logged in to the site
* THEN the menu options change to Search for Books, an option to see my saved books, and Logout
* WHEN I am logged in and enter a search term in the input field and click the submit button
* THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
* WHEN I click on the Save button on a book
* THEN that book’s information is saved to my account
* WHEN I click on the option to see my saved books
* THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
* WHEN I click on the Remove button on a book
* THEN that book is deleted from my saved books list
* WHEN I click on the Logout button
* THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Usage

**_User Persona:_**
- The primary user persona for this Google Book search engine API is a book enthusiast who enjoys discovering and keeping track of books. This user is likely to be tech-savvy, interested in exploring a variety of genres, and values a personalized experience.

**_Key Features:_**

- Search for Books: Users can easily search for books using a dedicated input field and a submit button.
- Login/Signup Functionality: Secure authentication process with options for both login and signup.
- Book Search Results: Detailed search results featuring book title, author, description, image, and a link to the book on the Google Books site.
- User Account Management: Ability to save and remove books from the user's account.

**_Benefits:_**

- User-Friendly Interface: Intuitive menu options and a straightforward search process.
- Personalization: The ability to create an account and save favorite books adds a personalized touch to the platform, making it more engaging for users.
- Efficient Book Discovery: Quick access to detailed book information.
- Convenient Account Management: Users can easily manage their saved books.

## Technologies
- [Render](https://docs.render.com/web-services)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [GraphQL](https://www.npmjs.com/package/graphql)
- [Apollo Client](https://www.npmjs.com/package/stripe)
- [Apollo-Server-Express](https://www.npmjs.com/package/apollo-server-express)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Express.js](https://www.npmjs.com/package/express)
- [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Node.js](https://nodejs.org/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [JWT-Decode](https://www.npmjs.com/package/jwt-decode)
- [React](https://www.npmjs.com/package/react)
- [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [React-Dom](https://www.npmjs.com/package/react-dom)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)

## Issues
- An issue occurred, which is preventing me from creating my database and deploying the application to Render correctly. 
- While installing GraphQL and Apollo Server dependencies in my server package.json, an error was thrown preventing the dependencies from being added.
- The error stated that there were issues with the bcrypt build when trying to npm install any dependencies.
- After searcheing for too long for a resolution, I was forced to deploy the application with the bugs.
- Additionally, I was unable to transfer the refactored code to a new repo or start the project over due to time contraints. 

## Screen Shot
![Screen shot of Render Deployment](<Screenshot 2024-02-01 at 3.23.50 AM.png>)

## Links
[Link to deployed App, Engines-a-go-go](https://engines-a-go-go.onrender.com)

