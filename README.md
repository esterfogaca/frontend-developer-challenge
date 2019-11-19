# Ester's Linx front-end challenge

This is a project made for the Linx's Front-end development challenge.
It's using Parcel, HTML, SASS and Javascript.

## Instructions:

### Clone this repository:
```
git clone https://github.com/esterfogaca/frontend-developer-challenge
```

### Install project dependencies:
```
npm install
```

### Run the project: 
```
npm start
```

### Build the project:
```
npm run build
```

### Live Preview:
[https://linx-front-end-challenge.surge.sh](https://linx-front-end-challenge.surge.sh)
or
[https://linx-front-end-challenge.netlify.com](https://linx-front-end-challenge.netlify.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e153bbc3-96ef-4b3c-95d1-f11b6c8d245b/deploy-status)](https://app.netlify.com/sites/linx-front-end-challenge/deploys)


### Documentation:
The project development files are located into the src/ folder.
Inside it, you will find the index.html file, an assets folder, a sass folder and a js folder.
Inside each of the folders, you'll will find the respective files.
The sass entry point is the main.scss file, with all the modules being named in order.
The js entry point is the script.js file.

#### Javascript:
##### throttleFunction(callback, delay)
It accepts a function and a delay (in milliseconds).
This function will execute a callback and create a timer, and then check in the next interaction if the timer has passed before calling the callback function again.

##### getProducts(url)
This function receives an url (the default value is 'frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'), sets the .products__loading--active class, and then sends the data to the injectProducts function. In case of an error, it will send an alert to the console.

##### injectProducts(data)
This function receives a json data object, and then creates the required html for the cards in the .products__list element in the webpage. When it's done, it removes the .products__loading--active class and updates the .products__button link so that it calls the getProducts function with the next page url from the api.

## Changelog:
- Added [Parcel.js](http://parceljs.org) to the project
- Added [Sass](http://sass-lang.com) to the project
- Re-worked the project's architecture
- Re-factored the project's HTML to be more semantic
- Re-factored the project's styling to be more modular
- Re-factored the project's javascript to be compatible with older browsers
- Added throttle function to the javascript
- Added project documentation