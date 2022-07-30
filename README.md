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

### [Click here to view my deployed website!](https://62e56adbc9d37433b6ac8c94--glowing-cobbler-afd359.netlify.app/)

## Website Architecture