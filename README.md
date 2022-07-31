# Website Guide

## Requirements

Node.js v16.13.0
<br>
npm     v8.1.0

***Note: Exact version of React used is 18.2.0***

## Installation and Setup

In the project directory, open a terminal and run:

### `npm install`
### `npm start`

The first command will install all the required libraries into ./node_modules and the second command will start the website on localhost.

## Deployment

Website has been deployed on [Netlify](https://www.netlify.com/) by:
- Pushing project to GitHub
- Starting a new project on Netlify
- Pick GitHub as hosting service
- Select your repository
- Authorise Netlify to access selected repository
- In the Netlify project, go to Deploy Settings:
    - In Build settings, edit build command to be `CI=false npm run build`
    - In Environment, set variables "NPM_FLAGS" = "--force" and "REACT_APP_BIT_APPID" = < your API id >
- Go back to project and select 'Clear cache and Deploy'

### [Click here to view my deployed website!](https://62e67079051ac74f61ee1b0a--glowing-cobbler-afd359.netlify.app/)

## Website Architecture

The overall website has been divided into two main components:
- App: the base component that is the project container
- Homepage: defines the website layout, shows searchbar, artists and events

For more modularity, the Homepage component is just a container (which facilitates data transfer) for:
- SearchBar: renders a search bar, passes value to parent component
- ArtistCard: takes props from parent component, renders a card displaying artist info passed in props
- EventsPage: displays events for selected artist

The three components mentioned above are rendered conditionally in the Homepage container. Either search bar + artist search result is displayed, or events for the selected artists.
This conditional render in Homepage component allows for a more consistent website experience and enables us to load different components as per the need without using routing.

So components are logically divided as per their required functionality and there is a low level of inter-dependence among them. Additionally, the main parent component (Homepage) deals with all the data, which is transferred to and from child components -
so the child components do not interact with each other directly.

For example, the SearchBar has the artist name to be searched. Instead of passing this to ArtistCard or EventsPage directly, it is sent to Homepage (parent component) instead.
Homepage will pass it on to ArtistCard/EventsPage when needed.

### Component Tree


![tree](https://github.com/sanaa-khan/web-dev-assignment/blob/master/public/tree.PNG)

## Tests

Tests were written using Jest library, in the file App.test.js. They can be executed by opening
terminal in project directory and running `npm run test`.

## Tools Used

- WebStorm IDE for development
- Create-React-App to bootstrap project
- Postman for testing API 
- Netlify for deployment

## Screenshots

All screenshots and demo video are included in "Demo Videos & Screenshots" folder. <hr><br>

### Homepage
![homepage](https://github.com/sanaa-khan/web-dev-assignment/blob/master/Demo%20Video%20%26%20Screenshots/Screenshots/Search%20Artist.PNG)

### Artist Events
![events](https://github.com/sanaa-khan/web-dev-assignment/blob/master/Demo%20Video%20%26%20Screenshots/Screenshots/View%20Events.PNG)

