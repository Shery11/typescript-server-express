# BitcoinMusicAPI

This project is the BitcoinMusic API & the documentation.

# Documentation

The Documentation is built with Angular, you can run from the root directory ng serve to run locally
You will need to run "ng build --prod" before doing a firebase deploy.

# API

The API is located inside "functions" directory.
To check for errors you can run "npm run lint"
To build it you can "npm run build"
To test it locally, you can run "firebase serve" after building.

# Deploy

You can deploy the whole packages from the root directory with "firebase deploy"
You can also do partial deploys following firebase guideline.
An example would be "firebase deploy --only functions" or "firebase deploy --only hosting"

# Routing

The API live inside the "main" cloud function, anything under /api will be routed to this function, however, if you add new top level cloud functions, you will need to add them to the firebase.json hosting rewrites section to make sure they work with our domain.
