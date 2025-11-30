# Chloe Wildman's Assignment 6 - Inventory Management Application - Update

To meet the assignment requirements, I built the "Teddy Crunch Co." store web application, which has both a home page and the shop page (the majority of assignment requirements are on the Shop page), using React after installing Vite + React/Javascript.

As a note, there are two elements included that appear clickable but are not. They are just there to keep on theme!
- The cart in the top right of the header.
- The "Add to cart" buttons on the product detail pages.

## Inspiration/Acknowledgements/Previous Experience

### Module 6 reading

I referenced the module 6 reading "Dynamic Routing with URL Parameters" to set up the deep links.

### WAD100 Course

The use of reset.css and some CSS was inspired by the WAD100 course. Here are the key items I used as inspiration:
- The use of reset.css (not really able to make this one unique!)

### Previous assignments

The majority of the code is from the Module 5 assignment since that is the expectation for this assignment. I did make some minor improvements -- since I needed to move the API call to the json file into the App.jsx file, I pulled it our of the Shop.jsx file and now that data is passed as a prop to Shop.jsx.

### Previous experience

In my day job, I was tasked with customizing a Help Center for my team, so I have some existing exposure and comfort with CSS.

### Online resources
The bear icon comes from https://www.svgrepo.com/ with some color customization.
The rest of the images come from https://www.canva.com/. There is a combination of stand-alone free images from Canva (such as the bubble tea, pocky, and raumune drink) along with elements that I combined to create a suitable image (such as the logo of the bears in the cart, the peach gummy candy, and mochi images)

## How My Project Meets Minimum Requirements

As a note, the assignment references the "Home" page. Since part of my effort to exceed requirements for the last assignment was to create more than one page, the "Shop" page in my app is the "Home" page referenced in the assignment requirements.

- Design the Home (Shop) page
    - If you go to the Shop page, each item is clickable and linked to a detail page for that item.

- Inventory Data Update
    - I included images in my last assignment, but description has also been included now.
    - Image files are located under public/.

- Detailed Product Component
    - I created a React component called ProductDetail to represent a single product and its information.
    - The component is reusable and accepts props.
    - This displays all the product information.
    - I included the breadcrumb to go back to the Home (Shop) page.

- Dynamic Routing
    - I implemented dynamic routing using React Router to handle navigation between the home page and product details.
    - The unique URL is based on the product's SKU number.

### Validity
- Valid: 
    - https://validator.w3.org/
    - http://jigsaw.w3.org/css-validator/ 


## How My Project Exceeds Minimum Requirements
- I designed an SPA which contains multiple React pages using BrowserRouter with functional links.
- I included the wildcard route.
- Each page consists of main content that React can swap out, but the header and footer are also reusable components.
- The site has a clear theme centered around a snack store with a teddy bear mascot.
- I hosted on Github Pages.