# Restaurants Overview

This project was created with React + Vite + TypeScript.

The task: Using the API provided send a postcode to return a set of data. Filter returned data to get only the first 10 restaurants and for each restaurant display name, cuisines, rating as a number and address.

## Prerequisites:

1. Ensure you are using Node version >=20.0.0.

2. To bypass CORS Policy block you can use browser extension. I used ALLOW CORS for Google Chrome: https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1

## Getting started

1. **Navigate to the Project Directory:**

Open a terminal or command prompt and navigate to the directory where you saved the project files.

     cd restaurants-overview

2. **Install Dependencies:**
   BEFORE YOU INSTALL: Please read the Prerequisites section above. Run the following command to install the required dependencies:

   npm install

3. **Serving,testing and building:**

   - npm run dev (open browser and navigate to `http://localhost:5173/`)
   - npm run test
   - npm run build

You should be all set!

## Assumptions

1. The _name_ property of objects in the _cuisines_ array also returns 'Low Delivery Fee', 'Deals' and/or 'Collect stamps' for some objects, which seems unrelated to other _name_ properties such as 'Noodles', 'Chinese' or 'Halal' that directly refer to food. I assumed they are nevertheless all required to be displayed as part of the requested data point _cuisines_.

2. For the _rating_ object I assumed only the _starRating_ property should be displayed.

3. For the _address_ object, I assumed that the _location_ property should also be displayed.

## Improvement potential

1. Sorting: The list of restaurants could be displayed according to the starRating - from highest to lowest. Alternatively, the restaurants could also be displayed in the alphabetical order.

2. Filtering: Adding an option to filter restaurants by criteria such as

- specific food type (i.e 'pizza')
- offering deals
- rating above a certain number
  etc.

3. UI:

- Adding clipboard functionality to each card, so the user can easily copy data
- Adding a short animation on load so users know data is being fetched and not missing
